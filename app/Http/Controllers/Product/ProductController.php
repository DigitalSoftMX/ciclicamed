<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Models\Medical\Prescription\Medicament;
use App\Models\Medical\Test\MedicalTestOrderAnnotation;
use App\Models\Product\Product;
use App\Models\Product\ProductCategory;
use App\Models\Product\ProductStatus;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    public function createProduct(ProductRequest $request)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $request->validated();
            $category = ProductCategory::where('name', $request->input('category'))->first()->id;
            $status = ProductStatus::where('name', 'Activo')->first()->id;
            $product = Product::create([
                'product_code' => $request->input('data.product_code'),
                'supplier_code' => $request->input('data.supplier_code'),
                'name' => $request->input('data.name'),
                'unit' => $request->input('data.unit'),
                'quantity_available' => $request->input('data.quantity_available'),
                'price' => $request->input('data.price'),
                'discount' => $request->input('data.discount'),
                'productcategory_id' => $category,
                'productstatus_id' => $status,
            ]);

            if(count($request['orders']) > 0)
            {
                MedicalTestOrderAnnotation::where('product_id', $product->id)->delete();

                foreach($request['orders'] as $annotation)
                {
                    MedicalTestOrderAnnotation::create([
                        'product_id' => $product->id,
                        'annotation' => $annotation
                    ]);
                }
            }

            return response()->json($product);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function updateProduct(ProductRequest $request, $id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $request->validated();
            $product = Product::findOrFail($id);
            $product->update([
                'product_code' => $request->input('data.product_code'),
                'supplier_code' => $request->input('data.supplier_code'),
                'name' => $request->input('data.name'),
                'unit' => $request->input('data.unit'),
                'quantity_available' => $request->input('data.quantity_available'),
                'price' => $request->input('data.price'),
                'discount' => $request->input('data.discount'),
                'productcategory_id' => $request->input('data.productcategory_id'),
                'productstatus_id' => $request->input('data.productstatus_id'),
            ]);
            if(count($request['orders']) > 0)
            {
                MedicalTestOrderAnnotation::where('product_id', $product->id)->delete();
                
                foreach($request['orders'] as $annotation)
                {
                    MedicalTestOrderAnnotation::create([
                        'product_id' => $product->id,
                        'annotation' => $annotation
                    ]);
                }
            }
            return response()->json($product);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function deleteProduct($id)
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador'))
        {
            $product = Product::findOrFail($id);
            $status = ProductStatus::where('name', 'Inactivo')->first()->id;
            $product->update([
                'productstatus_id' => $status,
            ]);
            return response()->json($product);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getTestOrderProducts()
    {
        $imagenologia = ProductCategory::where('name', 'Imagenología')->first()->id;
        $laboratorio = ProductCategory::where('name', 'Laboratorio')->first()->id;
        $status = ProductStatus::where('name', 'Activo')->first()->id;
        $products = Product::where('productcategory_id', $imagenologia)
                            ->where('productstatus_id', $status)
                            ->orWhere('productcategory_id', $laboratorio)
                            ->where('productstatus_id', $status)
                            ->get();
        $products->load('orderAnnotations:product_id,annotation');
        return response()->json($products);
    }

    public function getMedicaments()
    {
        $user = User::findOrFail(Auth::user()->id);
        if($user->hasRole('Administrador') || $user->hasRole('Doctor'))
        {
            $medicaments = Medicament::all();
            return response()->json($medicaments);
        }
        return response()->json(['errors' => [
            'permisos' => ['No cuenta con los permisos necesarios para realizar esta acción']
        ]], 401);
    }

    public function getConsulta(Request $request)
    {
        return $this->getPaginateData($request, 'Consulta');
    }

    public function getCirugia(Request $request)
    {
        return $this->getPaginateData($request, 'Cirugía');
    }

    public function getHisteroscopia(Request $request)
    {
        return $this->getPaginateData($request, 'Histeroscopía');
    }

    public function getCiclica(Request $request)
    {
        return $this->getPaginateData($request, 'Cíclica');
    }

    public function getImagenologia(Request $request)
    {
        return $this->getPaginateData($request, 'Imagenología');
    }

    public function getLaboratorio(Request $request)
    {
        return $this->getPaginateData($request, 'Laboratorio');
    }

    public function getFarmacia(Request $request)
    {
        return $this->getPaginateData($request, 'Farmacia');
    }

    private function getPaginateData(Request $request, string $category)
    {
        $user = User::findOrFail(Auth::user()->id);
        $status = ProductStatus::where('name', 'Activo')->first()->id;
        $ciclica = ProductCategory::where('name', $category)->first()->id;
        $product = Product::where('productcategory_id', $ciclica)->where('productstatus_id', $status);

        if(!$request->has('all'))
        {
            $productCiclica = [];
            if($request->has('query'))
            {
                $query = $request->input('query');
                $productCiclica = $product->where('product_code', 'like', '%'.$query.'%')
                        ->orWhere('supplier_code', 'like', '%'.$query.'%')
                        ->orWhere('name', 'like', '%'.$query.'%')
                        ->paginate();
            } else {
                $productCiclica = $product->paginate();
            }
            
            $response = [
                'pagination' => [
                    'total' => $productCiclica->total(),
                    'per_page' => $productCiclica->perPage(),
                    'current_page' => $productCiclica->currentPage(),
                    'last_page' => $productCiclica->lastPage(),
                    'from' => $productCiclica->firstItem(),
                    'to' => $productCiclica->lastItem()
                ],
                'data' => $productCiclica->load('status', 'category', 'orderAnnotations')
            ];

            return response()->json($response);
        }

        return response()->json($product->get()->load('status', 'category'));
    }
}

<template>
    <div class="card-single mb-4">
        <div class="card card-default card-md bg-normal card-bordered">

            <div class="card-header">
                <h6>Cáncer</h6>
                <div class="custom-control custom-switch switch-primary switch-md ">
                    <input type="checkbox" class="custom-control-input" id="switch-s1" checked="">
                    <label class="custom-control-label" for="switch-s1"></label>
                </div>
            </div>

            <div class="card-body">
                <div class="col-12 p-0 mb-25">
                    <label>Ginecológico</label>
                    <div class="d-flex">
                        <div class="col">
                            <div class="with-icon">
                                <span class="mr-5">
                                    <img src="/svg/text.svg" alt="Text logo">
                                </span>
                                <textarea type="text" class="form-control" id="ginecologicoDescription"
                                    placeholder="Ginecológico"></textarea>
                            </div>
                        </div>

                        <div class="col">
                            <div class="with-icon">
                                <span class="mr-5">
                                    <img src="/svg/time.svg" alt="Time logo">
                                </span>
                                <input type="number" class="form-control" id="ginecologicoAge"
                                    placeholder="Edad de aparición">
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-12 p-0">

                    <label>Otros</label>
                    <div class="d-flex">
                        <div class="col">
                            <div class="with-icon">
                                <span class="mr-5">
                                    <img src="/svg/text.svg" alt="Text logo">
                                </span>
                                <textarea type="text" class="form-control" id="otrosDescription"
                                    placeholder="Otros"></textarea>
                            </div>
                        </div>

                        <div class="col">
                            <div class="with-icon">
                                <span class="mr-5">
                                    <img src="/svg/time.svg" alt="Time logo">
                                </span>
                                <input type="number" class="form-control" id="otrosAge" placeholder="Edad de aparición">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

import React from "react";

const Stat = () => {
    return (
<div class="mx-auto max-w-6xl px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-20">
    <div class="row-gap-8 grid grid-cols-2 md:grid-cols-4">

        <div class="mb-12 text-center md:mb-0 md:border-r-2">
            <div class="font-heading text-[2.6rem] font-bold lg:text-5xl xl:text-6xl">
                15
            </div>
            <p class="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                años de trabajo
            </p>
        </div>

        <div class="mb-12 text-center md:mb-0 md:border-r-2">
            <div class="font-heading text-[2.6rem] font-bold lg:text-5xl xl:text-6xl">
                500+
            </div>
            <p class="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                jóvenes atendidos
            </p>
        </div>

        <div class="mb-12 text-center md:mb-0 md:border-r-2">
            <div class="font-heading text-[2.6rem] font-bold lg:text-5xl xl:text-6xl">
                50+
            </div>
            <p class="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                colaboradores
            </p>
        </div>

        <div class="mb-12 text-center md:mb-0 md:border-r-2">
            <div class="font-heading text-[2.6rem] font-bold lg:text-5xl xl:text-6xl">
                4
            </div>
            <p class="text-sm font-medium uppercase tracking-widest text-gray-800 lg:text-base">
                proyectos en marcha
            </p>
        </div>

    </div>

</div>
    );
};

export default Stat;

const huiswerkMaken = function(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak}huiswerk maken.`);
    setTimeout(() => {callback();
    }, 2000);
}

const klaarMetHuiswerk = function() {
    console.log("Kijk paps/mams, ik ben klaar met mijn huiswerk!")
}

huiswerkMaken('wiskunde', klaarMetHuiswerk)
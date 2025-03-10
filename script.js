function showDetails(series) {
    const detailsText = document.getElementById("details-text");

    const descriptions = {
        "breaking-bad": "Un profesor de química con problemas económicos toma decisiones arriesgadas para asegurar el futuro de su familia.",
        "stranger-things": "Un grupo de niños en un pueblo pequeño descubre sucesos paranormales y una niña con poderes extraordinarios.",
        "dark": "Un misterio de viajes en el tiempo donde el pasado, presente y futuro están conectados en un ciclo complejo.",
        "game-of-thrones": "Varias familias compiten por el trono en un mundo de fantasía medieval lleno de intrigas y traiciones."
    };

    detailsText.textContent = descriptions[series] || "No hay información disponible.";
}

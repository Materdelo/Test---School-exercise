function loadLib(fileName, extend, targetNode = "", ver = 0) {
    if(targetNode != "" && !document.querySelector(targetNode)) {
        return "Niepoprawny selektor"
    }
    if(extend == "js"){
        let script = document.createElement("script");
        script.src = fileName + (ver != 0 ? "?ver=" + ver: "")
        if(targetNode != ""){
            document.querySelector(targetNode).appendChild(script)
        } else {
            document.querySelector("body").appendChild(script)
        }
    } else if(extend == "css"){
        let link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = fileName + (ver != 0 ? "?ver=" + ver: "")
        document.querySelector("head").appendChild(link) 
    } else {
        return "Niepoprawny rodzaj pliku"
    }
}

function toggleDesc(id){
    const el = document.getElementById(id);
    el.style.display = el.style.display === "none" ? "block" : "none";
}

function showParts(parts) {
    const content = document.getElementById("contentBox");
    content.innerHTML = `<div class="title">${parts.title}</div>`;
    parts.items.forEach((p,index)=>{
        content.innerHTML += `
        <div class="partnumber">
            <span style="cursor:pointer; font-weight:bold;" onclick="toggleDesc('${index}')">${p.name}</span>
            <a href="${p.link}" target="_blank">Link</a>
            <div id="${index}" style="display:none; margin-top:5px; color:#333;">${p.description}</div>
        </div>`;
    });
}
const url_topico = "http://localhost:3000/topicos";
const url_usuario = "http://localhost:3000/usuarios";
const url_page = window.location.href;

document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save-button");
    const saveRequirementsButton = document.getElementById("save-requirements-button");
    
    saveButton.addEventListener("click", () => {
        const userInfo = {
            fullName: document.getElementById("fullName").value,
            birthDate: document.getElementById("birthDate").value,
            bloodType: document.getElementById("bloodType").value,
            cell: document.getElementById("cell").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            district: document.getElementById("district").value,
            city: document.getElementById("city").value,
            cep: document.getElementById("cep").value
        };

        updateUserInformation(userInfo);
        disableEditing();
    });

    saveRequirementsButton.addEventListener("click", () => {
        const requirementsInfo = {
            weight: document.querySelector('input[name="weight"]:checked')?.value,
            age: document.querySelector('input[name="age"]:checked')?.value,
            endemic: document.querySelector('input[name="endemic"]:checked')?.value,
            ists: document.querySelector('input[name="ists"]:checked')?.value,
            hepatiteHIV: document.querySelector('input[name="hepatiteHIV"]:checked')?.value,
            infection: document.querySelector('input[name="infection"]:checked')?.value
        };

        updateRequirementsInformation(requirementsInfo);
        disableEditingRequirements();
    });
});

function enableEditing() {
    const inputs = document.querySelectorAll('.editable');
    inputs.forEach(input => {
        input.style.display = 'inline';
        const span = document.getElementById(input.id + 'Text');
        span.style.display = 'none';
        let simounao = document.getElementById("sim-nao");
        simounao.style.display= "inline"; 
    });
}

function disableEditing() {
    const inputs = document.querySelectorAll('.editable');
    inputs.forEach(input => {
        input.style.display = 'none';
        const span = document.getElementById(input.id + 'Text');
        span.textContent = input.value || 'Não informado';
        span.style.display = 'inline';
    });
}

function enableEditingRequirements() {
    const inputs = document.querySelectorAll('.editable-requirements');
    inputs.forEach(input => {
        input.style.display = 'inline';
        input.parentElement.querySelector('span').style.display = 'none';
    });
}

function disableEditingRequirements() {
    const inputs = document.querySelectorAll('.editable-requirements');
    inputs.forEach(input => {
        input.style.display = 'none';
        const span = input.parentElement.querySelector('span');
        const checkedRadio = input.parentElement.querySelector('input[type="radio"]:checked');
        span.textContent = checkedRadio ? (checkedRadio.value === 'yes' ? 'Sim' : 'Não') : 'Não informado';
        span.style.display = 'inline';
    });
}
async function get_info(url) {
    const res = await fetch(url);
  
    return res.json();
}

function updateUserInformation(data) {
    fetch("http://localhost:3000/users", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(updatedData => {
        console.log("Informações atualizadas com sucesso:", updatedData);
    })
    .catch(error => {
        console.error("Erro ao atualizar informações:", error);
    });
}

function updateRequirementsInformation(data) {
    fetch("http://localhost:3000/requirements", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(updatedData => {
        console.log("Requisitos atualizados com sucesso:", updatedData);
    })
    .catch(error => {
        console.error("Erro ao atualizar requisitos:", error);
    });
}

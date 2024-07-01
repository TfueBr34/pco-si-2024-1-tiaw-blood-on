const url_usuario = "http://api-storage-tiaw-navy.vercel.app/usuarios";
const url_page = window.location.href;

async function carregaDados(){
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));
    let sexo;
    if(usuario.sexo == "1"){
        sexo = "Masculino";
    }else{
        sexo = "Feminino";
    }
    let html_user = `<div class="user-name">
                    <h2 id="user-name">
                        <span id="fullNameText">${usuario.username}</span>
                        <input type="text" id="fullName" class="editable" value="">
                        <button class="edit-button" onclick="enableEditing()">✏️</button>
                    </h2>
                </div>
                <div class="user-details">
                    <h3>INFORMAÇÕES PESSOAIS</h3>
                    <p>
                        Data de Nascimento: <span id="birthDateText">${usuario.dt_nasc}</span><input type="date" id="birthDate" class="editable" value=""><br>
                        Celular: <span id="cellText">${usuario.telefone}</span><input type="text" id="cell" class="editable" value=""><br>
                        E-mail: <span id="emailText">${usuario.email}</span><input type="text" id="email" class="editable" value=""><br>
                    </p>
                </div>
                <div class="other-info">
                    <h3>OUTRAS INFORMAÇÕES</h3>
                    <p>
                        Bairro: <span id="districtText">${usuario.bairro}</span><input type="text" id="district" class="editable" value=""><br>
                        Cidade: <span id="cityText">${usuario.cidade}</span><input type="text" id="city" class="editable" value=""><br>
                        Sexo: <span id="sexoText">${sexo}</span><input type="text" id="sexo" class="editable" value=""><br>
                    </p>
                </div>
                <button id="save-button" class="save-button">Salvar</button>`;
    let secao_usuario = document.querySelector(".user-info");
    secao_usuario.innerHTML = html_user;
}

carregaDados()
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

        updateUser(userInfo);
        disableEditing();
    });

    saveRequirementsButton.addEventListener("click", () => {
        const requirementsInfo = {
            peso: document.querySelector('input[name="weight"]:checked')?.value,
            idade: document.querySelector('input[name="age"]:checked')?.value,
            viagem: document.querySelector('input[name="endemic"]:checked')?.value,
            ist: document.querySelector('input[name="ists"]:checked')?.value,
            hep_hiv: document.querySelector('input[name="hepatiteHIV"]:checked')?.value,
            doenca: document.querySelector('input[name="infection"]:checked')?.value
        };

        updateRequirements(requirementsInfo);
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


let messageEmail = "";
let usernameSend = "";
const inputs = document.querySelectorAll(".inputs");
let inputsObj = {
    nameInputC: "",
    addressInputC: "",
    cityInputC: "",
    birthdayInputC: "",
    phoneInputC: "",
    emailInputC: "",
    levelInputC: "",
    sizeInputC: "",
    weightInputC: "",
    parentInputC: "",
    hourDateInputC: "",
    dateInputC: "",
}

inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        if (input === debutant || input === moyen) {
            inputsObj.levelInputC = e.target.id;
        } else {
            inputsObj[e.target.id + "C"] = e.target.value;
        }
        usernameSend = inputsObj.nameInputC;
        messageEmail = `
        Prénom / Nom : ${inputsObj.nameInputC}ㅤㅤㅤ
        Adresse : ${inputsObj.addressInputC}ㅤㅤㅤ
        Code postal / Ville : ${inputsObj.cityInputC}ㅤㅤㅤ
        Date de naissance : ${inputsObj.birthdayInputC}ㅤㅤㅤ
        Téléphone : ${inputsObj.phoneInputC}ㅤㅤㅤ
        Email : ${inputsObj.emailInputC}ㅤㅤㅤ
        Niveau : ${inputsObj.levelInputC}ㅤㅤㅤ
        Taille : ${inputsObj.sizeInputC}cmㅤㅤㅤ
        Poids : ${inputsObj.weightInputC}Kgㅤㅤㅤ
        AUTORISATION PARENTALE (pour les mineurs)ㅤㅤㅤ
        Je soussigné(e), ${inputsObj.parentInputC}, père/mère/tuteur légal, autorise mon fils/ma fille. Fait à ${inputsObj.hourDateInputC}, le ${inputsObj.dateInputC}.`
    });
});


sendButton.addEventListener("click", () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "escolazul.hote@gmail.com",
        Password : "9F2F29DCDBEEC69BE33AB09ACD682E09F8DA",
    
        To : 'fanette27@outlook.fr',
        From : "form.escol.azul@gmail.com",
    
        Subject : `Test form. utilisateur : ${usernameSend}.`,
        Body : messageEmail,
    }).then(
      message => alert(message)
    );
});
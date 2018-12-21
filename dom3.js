$("#button").click(function () {
let greshka =$("#error");
    let firstName = $("#firstname-value").val();
    let lasttName = $("#lasttname-value").val();
    let password = $("#password-value").val();
    let email = $("#email-value").val();
    if ((firstName !== "") && (lasttName !== "") && (password !== "") && (email !== "")) {
       
       
        $(".tabela").append(`
        <tr>
            <td>${firstName}</td>
            <td>${lasttName}</td>
            <td>${password}</td>
            <td>${email}</td>
        </tr>
   `);
   greshka.text(``) ;
    } else greshka.text(`Vnesete informacii pravilno`) ;

});

// nav
const dt1 = document.querySelector('.nav--dropdown__t1');
const dt2 = document.querySelector('.nav--dropdown__t2');
const dt3 = document.querySelector('.nav--dropdown__t3');
const dt4 = document.querySelector('.nav--dropdown__t4');
const dt5 = document.querySelector('.nav--dropdown__t5');
const dt6 = document.querySelector('.nav--dropdown__t6');
const dt7 = document.querySelector('.nav--dropdown__t7');

document.getElementById('nav__drop--t1').onmouseover = function() {drop_t1_mouseOver()};
document.getElementById('nav__drop--t2').onmouseover = function() {drop_t2_mouseOver()};
document.getElementById('nav__drop--t3').onmouseover = function() {drop_t3_mouseOver()};
document.getElementById('nav__drop--t4').onmouseover = function() {drop_t4_mouseOver()};
document.getElementById('nav__drop--t5').onmouseover = function() {drop_t5_mouseOver()};
document.getElementById('nav__drop--t6').onmouseover = function() {drop_t6_mouseOver()};
document.getElementById('nav__drop--t7').onmouseover = function() {drop_t7_mouseOver()};

function drop_t1_mouseOver(){
    dt1.style.display = 'block';
    dt2.style.display = 'none';
    dt3.style.display = 'none';
    dt4.style.display = 'none';
    dt5.style.display = 'none';
    dt6.style.display = 'none';
    dt7.style.display = 'none';
}
function drop_t2_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'block';
    dt3.style.display = 'none';
    dt4.style.display = 'none';
    dt5.style.display = 'none';
    dt6.style.display = 'none';
    dt7.style.display = 'none';
}
function drop_t3_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'none';
    dt3.style.display = 'block';
    dt4.style.display = 'none';
    dt5.style.display = 'none';
    dt6.style.display = 'none';
    dt7.style.display = 'none';
}
function drop_t4_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'none';
    dt3.style.display = 'none';
    dt4.style.display = 'block';
    dt5.style.display = 'none';
    dt6.style.display = 'none';
    dt7.style.display = 'none';
}
function drop_t5_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'none';
    dt3.style.display = 'none';
    dt4.style.display = 'none';
    dt5.style.display = 'block';
    dt6.style.display = 'none';
    dt7.style.display = 'none';
}
function drop_t6_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'none';
    dt3.style.display = 'none';
    dt4.style.display = 'none';
    dt5.style.display = 'none';
    dt6.style.display = 'block';
    dt7.style.display = 'none';
}
function drop_t7_mouseOver(){
    dt1.style.display = 'none';
    dt2.style.display = 'none';
    dt3.style.display = 'none';
    dt4.style.display = 'none';
    dt5.style.display = 'none';
    dt6.style.display = 'none';
    dt7.style.display = 'block';
}


// main
// main section--plan checkbox
function checkbox__function(){
    const check = document.getElementById('mycheck');
    const monthly = document.getElementById('MONTHLY');
    const yearly = document.getElementById('YEARLY');
    // section--quotations edit value
    let p_starter = document.getElementById('pricing__starter');
    let p_pro = document.getElementById('pricing__pro');
    let p__business = document.getElementById('pricing__business');
    let ytext = document.querySelectorAll('.quotations__text--yearly');
    //section--addition
    let addition__head = document.getElementById('addition__heading');
    // addition--box a
    let addition_at1 = document.getElementById('addition--text__a1');
    let addition_at2 = document.getElementById('addition--text__a2');
    let addition_ac1 = document.getElementById('addition--content__a1');
    let addition_ac2 = document.getElementById('addition--content__a2');
    let addition_ac3 = document.getElementById('addition--content__a3');
    // addition--box b
    let addition_bt1 = document.getElementById('addition--text__b1');
    let addition_bt2 = document.getElementById('addition--text__b2');
    // addition--box c
    let addition_ct1 = document.getElementById('addition--text__c1');
    let addition_ct2 = document.getElementById('addition--text__c2');
    let addition_cc1 = document.getElementById('addition--content__c1');
    let addition_cc2 = document.getElementById('addition--content__c2');
    let addition_cc3 = document.getElementById('addition--content__c3');
    if(check.checked==true){
        monthly.style.color='#60626e';
        yearly.style.color='black';
        p_starter.innerText='17';
        p_pro.innerText='32';
        p__business.innerText='52';
        for (var i=0;i<ytext.length;i+=1){
            ytext[i].style.display = 'block';
          }
        addition__head.innerText='Customize your workflow with add-ons';
        addition_at1.innerText='$100';
        addition_at2.style.display='block';
        addition_ac1.innerText='Accounting & Tax Assistant';
        addition_ac2.innerText='Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.';
        addition_ac3.style.display='block';
        addition_bt1.innerText='$90';
        addition_bt2.innerText='/YEAR';
        addition_ct1.innerText='Free';
        addition_ct2.style.display='none';
        addition_cc1.innerText='Collaborators';
        addition_cc2.innerText='Invite other users to specific projects for limited access and functionality.';
        addition_cc3.style.display='none';

    }else{
        monthly.style.color='black';
        yearly.style.color='#60626e';
        p_starter.innerText='24';
        p_pro.innerText='39';
        p__business.innerText='79';
        for (var i=0;i<ytext.length;i+=1){
            ytext[i].style.display = 'none';
          }
        addition__head.innerText='Supercharge your work with add-ons';
        addition_at1.innerText='Free';
        addition_at2.style.display='none';
        addition_ac1.innerText='Collaborators';
        addition_ac2.innerText='Invite other users to specific projects for limited access and functionality.';
        addition_ac3.style.display='none';
        addition_bt1.innerText='$9';
        addition_bt2.innerText='/MONTH';
        addition_ct1.innerText='$10';
        addition_ct2.style.display='block';
        addition_cc1.innerText='Bonsai Tax';
        addition_cc2.innerText='Track expenses, identify write-offs, and estimate quarterly taxes easily.';
        addition_cc3.style.display='block';
    }

}

//  nav__hidden, main questions and footer 
var drop = document.getElementsByClassName("dropdown--list");
var i;
for (i = 0; i < drop.length; i++) {
    drop[i].onclick = function(){
        var panel = this.nextElementSibling; //nextElementSibling = class พี่น้อง
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}



// main questions    ลดรูป function

// function questions__click1(){ //none
//     const questions__hiddenjs = document.getElementById('questions__hidden1');
//     if(questions__hiddenjs.style.display === "none"){
//         questions__hiddenjs.style.display = "block";
//     }else{
//         questions__hiddenjs.style.display = "none";
//     }
// }
// function questions__click2(){ //none
//     const questions__hiddenjs = document.getElementById('questions__hidden2');
//     if(questions__hiddenjs.style.display === "none"){
//         questions__hiddenjs.style.display = "block";
//     }else{
//         questions__hiddenjs.style.display = "none";
//     }
// }
// function questions__click3(){ //none
//     const questions__hiddenjs = document.getElementById('questions__hidden3');
//     if(questions__hiddenjs.style.display === "none"){
//         questions__hiddenjs.style.display = "block";
//     }else{
//         questions__hiddenjs.style.display = "none";
//     }
// }
// function questions__click4(){ //none
//     const questions__hiddenjs = document.getElementById('questions__hidden4');
//     if(questions__hiddenjs.style.display === "none"){
//         questions__hiddenjs.style.display = "block";
//     }else{
//         questions__hiddenjs.style.display = "none";
//     }
// }


// footer

//footer--FREE RESOURCES--templates    ลดรูป function

// function templates__dropdownclick1(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template1');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function templates__dropdownclick2(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template2');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function templates__dropdownclick3(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template3');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function templates__dropdownclick4(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template4');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function templates__dropdownclick5(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template5');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function templates__dropdownclick6(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__template6');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }
// function comparisons__dropdownclick(){ //none
//     const footer__dropdownjs = document.getElementById('dropdown--list__comparisons');
//     if(footer__dropdownjs.style.display === "none"){
//         footer__dropdownjs.style.display = "block";
//     }else{
//         footer__dropdownjs.style.display = "none";
//     }
// }

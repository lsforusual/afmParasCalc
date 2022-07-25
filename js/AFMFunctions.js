/*
 * @Author: Jonah Liu
 * @Date: 2022-07-25 17:02:32
 * @LastEditTime: 2022-07-25 17:06:04
 * @LastEditors: Jonah Liu
 * @Description: 
 */
const rho_silicon = 2330; //kg/m3,  density of silicon
const E_silicon = 1.69E11; //N/m2, modulus of elasticity / Young’s modulus in the <110> direction of silicon
const G_silicon = 0.5E11; //N/m2, modulus of rigidity / modulus of elasticity in shear of silicon
var _E = E_silicon;
var _rho = rho_silicon;
var _G = G_silicon;
var _W = 4; //um, AFM cantilever width
var _L = 125; //um, AFM cantilever length
var _H = 17; //um, AFM tip height
var _T = 4 ;//um, thickness

function calc() {
	_W = document.getElementById("width").value;
	_L = document.getElementById("length").value;
	_H = document.getElementById("height").value;
	_T = document.getElementById("thickness").value;

	document.getElementById("FreqNTM").innerText=frequenceNoTipMass().toFixed(2);
	document.getElementById("FreqWTM").innerText=frequenceWithTipMass().toFixed(2);
	document.getElementById("nFC").innerText=normalForceConstant().toFixed(2);
	document.getElementById("lFC").innerText=lateralForceConstant().toFixed(2);
	document.getElementById("tFC").innerText=torsionalForceConstant().toFixed(2);

}

function normalForceConstant() {

// ref: https://www.nanoandmore.com/more-about-afm-cantilevers
	return (_E / 4 * _W * Math.pow(_T,3) * Math.pow(_L, -3) * 1E-6);

}

function lateralForceConstant() {

	return (_E / 4 * _T * Math.pow(_W, 3) * Math.pow(_L, -3) * 1E-6);

}

function torsionalForceConstant() {

	return (_G / 3 * _W* Math.pow(_T,3) / _L / Math.pow(_H+_T/2,2) * 1E-6);

}

function frequenceNoTipMass() {

	//f in kHz
	return (0.162 * Math.pow(_E / _rho, 0.5) * _T * Math.pow(_L, -2) * 1E6 / 1E3);

}

function frequenceWithTipMass() {

	//f in kHz
	return 0.276 * Math.pow(_E * _W * Math.pow(_T, 3) / _rho / (Math.PI *
		Math.pow(_H * _L, 3) + 2.832 * _W * _T * Math.pow(_L, 4)), 0.5) * 1E6 / 1E3;

}
console.log(normalForceConstant());




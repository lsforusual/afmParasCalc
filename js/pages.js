/*
 * @Author: Jonah Liu
 * @Date: 2022-07-25 17:14:15
 * @LastEditTime: 2022-07-25 17:41:22
 * @LastEditors: Jonah Liu
 * @Description: 
 */
function AFM(){
    var _panel = document.getElementById("mainPanel")
    _panel.innerHTML='<h1 id="panelTitle">AFM 力常数估算<sup><a href="#Ref" >[1]</a></sup></h1>\
    <ul id="calc" class="uk-grid uk-grid-small uk-grid-width-medium-1-2 uk-grid-width-small-1-1">\
        <li >\
            <label for="width" >悬臂宽度  (um):&nbsp;</label>\
            <input id="width" value="4" />\
        </li>\
        <li >\
            <label for="height">针尖高度 (um):&nbsp;</label>\
            <input id="height" value="17" />\
        </li >\
        <li>\
            <label for="length">悬臂长度  (um):&nbsp;</label>\
            <input id="length" value="125" />\
        </li>\
        <li>\
            <label for="thickness">悬臂厚度  um):&nbsp;</label>\
            <input id="thickness" value="4" />\
        </li>\
    </ul>\
    <input id="submit" type="button" value="计算！" class="uk-button uk-width-1-1" onclick="calc()"/>\
\
    <h3 class="uk-text-left">结果与说明:</h3> \
\
    <dl id="result" class="uk-grid uk-grid-collapse uk-grid-width-medium-1-2 uk-grid-width-small-1-1">\
            <dt class="uk-text-center-small">共振频率 <i>f</i><sub>normal</sub>  (kHz): &nbsp;</dt>\
                <dd id="FreqNTM" class="uk-text-center-small"> 0</dd>\
            <dt class="uk-text-center-small">矫正共振频率 <i>f</i><sub>correct</sub> (kHz): &nbsp;</dt>\
                <dd id="FreqWTM" class="uk-text-center-small">0</dd>\
            <dt class="uk-text-center-small">力常数 <i>k</i><sub>normal</sub>  (N/m): &nbsp;</dt>\
                <dd id="nFC" class="uk-text-center-small">0</dd>\
            <dt class="uk-text-center-small">扭转力常数 <i>k</i><sub>torsion</sub> (N/m): &nbsp;</dt>\
                <dd id="tFC" class="uk-text-center-small">0</dd>\
            <dt class="uk-text-center-small">侧向力常数 <i>k</i><sub>lateral</sub> (N/m): &nbsp;</dt>\
                <dd id="lFC" class="uk-text-center-small">0</dd>\
    </dl>\
\
    <p class="uk-text-left">\
    本计算中默认使用硅(Si)的相关参数进行计算：<br>\
        &emsp;密度：<i>ρ</i><sub>Si</sub> = 2330 kg/m<sup>3</sup>; <br>\
        &emsp;杨氏模量（弹性模量）<i>E</i><sub>Si(110)</sub> = 1.69×10<sup>11</sup> N/m<sup>2</sup>; <br>\
        &emsp;刚性模量（剪切模量）<i>G</i><sub>Si</sub> = 0.5×10<sup>11</sup> N/m<sup>2</sup>;<br>\
    </p>\
</div>'


document.getElementById("Intro").innerHTML='<h2>AFM探针的共振频率与力常数：</h2>\
<p><img src="img/resonance-frequency-afm-cantilever.png" style="margin: 0 auto;" /></sup></p>'

document.getElementById("Ref").innerHTML='<h2>参考文献：</h2>\
<p>[1]：<a href="https://www.nanoandmore.com/more-about-afm-cantilevers" target="_blank">NanoAndMore网站</a>\
    <br />\
   [2]：Formulas are derived from “Roark’s Formulas for Stress and Strain”, 6th edition, Waren C. Young, McGraw Hill.\
</p>\
'
}
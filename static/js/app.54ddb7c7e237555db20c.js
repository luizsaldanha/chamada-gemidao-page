webpackJsonp([1],{124:function(a,e){},126:function(a,e,t){function s(a){t(151)}var o=t(123)(t(146),t(158),s,null,null);a.exports=o.exports},146:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(157),o=t.n(s);e.default={name:"app",components:{Home:o.a}}},147:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(149),o=t(150),i=t(0),n=t.n(i);e.default={name:"chamadaDoGemidao",data:function(){return{show:{comoUsar:!1,cadastro:!1,autenticacao:!1,info:!1},planoEscolhido:1,planos:{1:"1,19",2:"2,00",3:"2,75",4:"3,50",5:"4,25",6:"5,00",7:"5,75",8:"6,50",9:"7,25",10:"8,00",15:"11,75",20:"15,50",30:"23,00",40:"30,50",50:"38,00"},meuNumero:"",meuNumero2:"",comprando:!1,auth:{numero:"",senha:"",autenticando:!1,exibir:!1,token:""},transacoes:[],info:{},infoAtualizando:!1,chamada:{de:"",para:"",mensagem:"",enviando:!1},exibirTermos:!1}},methods:{dataFormat:function(a){return n.a.unix(a).format("DD/MM/YY HH:mm:ss")},removerAutenticacao:function(){window.localStorage.removeItem("token"),this.auth.token="",this.info={},this.transacoes=[]},pagseguro:function(a){PagSeguroLightbox({code:a},{success:function(a){s.a.get("/transacao?transacao_id="+a)},abort:function(){console.log("abortado")}})},comprar:function(){var a=this;s.a.post("/comprar",{numero:this.rawNumero(this.meuNumero),plano:this.planoEscolhido}).then(function(e){e.data.code&&a.pagseguro(e.data.code),a.comprando=!1})},autenticar:function(){var a=this;this.auth.autenticando=!0,s.a.post("/login",{username:this.rawNumero(this.auth.numero),password:this.auth.senha}).then(function(a){if(a.data.token)try{localStorage.setItem("token",a.data.token),localStorage.setItem("tokenExpire",a.data.expire),window.location.reload()}catch(a){alert("Informamos que não é possível utilizar o sistema no navegador Safari em janela privada, pedimos por gentileza que prossiga utilizando o acesso comum. Em caso de dúvidas entre em contato com nosso suporte via chat")}}).catch(function(a){o.a.error("Numero ou senha incorreto")}).then(function(e){a.auth.autenticando=!1})},getTransacoes:function(){var a=this;s.a.get("/auth/chamadas/historico").then(function(e){a.transacoes=e.data}).catch(function(a){})},getInfo:function(){var a=this;this.infoAtualizando=!0,s.a.get("/auth/info").then(function(e){a.info=e.data}).catch(function(a){o.a.error("Não foi possivel obter as informações")}).then(function(){a.infoAtualizando=!1})},ligar:function(){var a=this;this.chamada.enviando=!0,s.a.post("/auth/chamada",{de:this.rawNumero(this.chamada.de),para:this.rawNumero(this.chamada.para),mensagem:this.chamada.mensagem}).then(function(e){if("ok"==e.data.status)return o.a.success(e.data.message),void(a.info.saldo>0&&(a.info.saldo=a.info.saldo-1));o.a.error(e.data.message)}).catch(function(){o.a.success("Algum problema com a rede ou o serviço, aguarde alguns instantes e tente novamente")}).then(function(){a.chamada.enviando=!1})},eventoGa:function(a,e){ga("send","event",a,e)},getTermos:function(){return localStorage.getItem("termos")},setTermos:function(a){try{localStorage.setItem("termos",a),location.reload()}catch(a){alert("Informamos que não é possível utilizar o sistema no navegador Safari em janela privada, pedimos por gentileza que prossiga utilizando o acesso comum. Em caso de dúvidas entre em contato com nosso suporte via chat")}},closeModal:function(){this.show.comoUsar=!1,this.show.cadastro=!1,this.show.autenticacao=!1,this.show.info=!1},rawNumero:function(a){return a.replace(/\D/g,"")}},created:function(){var a=this,e=localStorage.getItem("token");e&&(this.auth.token=e,this.getTransacoes(),this.getInfo()),document.addEventListener("keydown",function(e){27===e.keyCode&&a.closeModal()})}}},148:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(127),o=t(126),i=t.n(o),n=t(124),r=(t.n(n),t(125));s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:i.a}})},149:function(a,e,t){"use strict";var s=t(128),o=t.n(s),i={},n=localStorage.getItem("token");n&&(i.Authorization="Bearer "+n);var r=o.a.create({baseURL:"https://api.chamadagemidao.com",timeout:5e4,headers:i});e.a=r},150:function(a,e,t){"use strict";var s=t(154),o=t.n(s);o.a.init(),e.a=o.a},151:function(a,e){},152:function(a,e){},155:function(a,e,t){function s(a){return t(o(a))}function o(a){var e=i[a];if(!(e+1))throw new Error("Cannot find module '"+a+"'.");return e}var i={"./af":8,"./af.js":8,"./ar":15,"./ar-dz":9,"./ar-dz.js":9,"./ar-kw":10,"./ar-kw.js":10,"./ar-ly":11,"./ar-ly.js":11,"./ar-ma":12,"./ar-ma.js":12,"./ar-sa":13,"./ar-sa.js":13,"./ar-tn":14,"./ar-tn.js":14,"./ar.js":15,"./az":16,"./az.js":16,"./be":17,"./be.js":17,"./bg":18,"./bg.js":18,"./bn":19,"./bn.js":19,"./bo":20,"./bo.js":20,"./br":21,"./br.js":21,"./bs":22,"./bs.js":22,"./ca":23,"./ca.js":23,"./cs":24,"./cs.js":24,"./cv":25,"./cv.js":25,"./cy":26,"./cy.js":26,"./da":27,"./da.js":27,"./de":30,"./de-at":28,"./de-at.js":28,"./de-ch":29,"./de-ch.js":29,"./de.js":30,"./dv":31,"./dv.js":31,"./el":32,"./el.js":32,"./en-au":33,"./en-au.js":33,"./en-ca":34,"./en-ca.js":34,"./en-gb":35,"./en-gb.js":35,"./en-ie":36,"./en-ie.js":36,"./en-nz":37,"./en-nz.js":37,"./eo":38,"./eo.js":38,"./es":40,"./es-do":39,"./es-do.js":39,"./es.js":40,"./et":41,"./et.js":41,"./eu":42,"./eu.js":42,"./fa":43,"./fa.js":43,"./fi":44,"./fi.js":44,"./fo":45,"./fo.js":45,"./fr":48,"./fr-ca":46,"./fr-ca.js":46,"./fr-ch":47,"./fr-ch.js":47,"./fr.js":48,"./fy":49,"./fy.js":49,"./gd":50,"./gd.js":50,"./gl":51,"./gl.js":51,"./gom-latn":52,"./gom-latn.js":52,"./he":53,"./he.js":53,"./hi":54,"./hi.js":54,"./hr":55,"./hr.js":55,"./hu":56,"./hu.js":56,"./hy-am":57,"./hy-am.js":57,"./id":58,"./id.js":58,"./is":59,"./is.js":59,"./it":60,"./it.js":60,"./ja":61,"./ja.js":61,"./jv":62,"./jv.js":62,"./ka":63,"./ka.js":63,"./kk":64,"./kk.js":64,"./km":65,"./km.js":65,"./kn":66,"./kn.js":66,"./ko":67,"./ko.js":67,"./ky":68,"./ky.js":68,"./lb":69,"./lb.js":69,"./lo":70,"./lo.js":70,"./lt":71,"./lt.js":71,"./lv":72,"./lv.js":72,"./me":73,"./me.js":73,"./mi":74,"./mi.js":74,"./mk":75,"./mk.js":75,"./ml":76,"./ml.js":76,"./mr":77,"./mr.js":77,"./ms":79,"./ms-my":78,"./ms-my.js":78,"./ms.js":79,"./my":80,"./my.js":80,"./nb":81,"./nb.js":81,"./ne":82,"./ne.js":82,"./nl":84,"./nl-be":83,"./nl-be.js":83,"./nl.js":84,"./nn":85,"./nn.js":85,"./pa-in":86,"./pa-in.js":86,"./pl":87,"./pl.js":87,"./pt":89,"./pt-br":88,"./pt-br.js":88,"./pt.js":89,"./ro":90,"./ro.js":90,"./ru":91,"./ru.js":91,"./sd":92,"./sd.js":92,"./se":93,"./se.js":93,"./si":94,"./si.js":94,"./sk":95,"./sk.js":95,"./sl":96,"./sl.js":96,"./sq":97,"./sq.js":97,"./sr":99,"./sr-cyrl":98,"./sr-cyrl.js":98,"./sr.js":99,"./ss":100,"./ss.js":100,"./sv":101,"./sv.js":101,"./sw":102,"./sw.js":102,"./ta":103,"./ta.js":103,"./te":104,"./te.js":104,"./tet":105,"./tet.js":105,"./th":106,"./th.js":106,"./tl-ph":107,"./tl-ph.js":107,"./tlh":108,"./tlh.js":108,"./tr":109,"./tr.js":109,"./tzl":110,"./tzl.js":110,"./tzm":112,"./tzm-latn":111,"./tzm-latn.js":111,"./tzm.js":112,"./uk":113,"./uk.js":113,"./ur":114,"./ur.js":114,"./uz":116,"./uz-latn":115,"./uz-latn.js":115,"./uz.js":116,"./vi":117,"./vi.js":117,"./x-pseudo":118,"./x-pseudo.js":118,"./yo":119,"./yo.js":119,"./zh-cn":120,"./zh-cn.js":120,"./zh-hk":121,"./zh-hk.js":121,"./zh-tw":122,"./zh-tw.js":122};s.keys=function(){return Object.keys(i)},s.resolve=o,a.exports=s,s.id=155},157:function(a,e,t){function s(a){t(152)}var o=t(123)(t(147),t(159),s,"data-v-f5772fae",null);a.exports=o.exports},158:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("home")],1)},staticRenderFns:[]}},159:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"section"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-offset-1 is-7"},[a._m(0),a._v(" "),a._m(1),a._v(" "),t("div",{staticClass:"field is-horizontal"},[t("div",{staticClass:"field-body"},[t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-info button-max button-max-desktop",on:{click:function(e){a.show.comoUsar=!0}}},[a._v("Como comprar e realizar ligações")])])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-warning button-max button-max-desktop",on:{click:function(e){a.show.info=!0}}},[a._v("Dúvidas Gerais")])])])])]),a._v(" "),a.getTermos()||a.auth.token?t("div",[t("div",{staticClass:"field is-horizontal"},[t("div",{staticClass:"field-body"},[t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("button",{staticClass:"button is-success button-max button-max-desktop",on:{click:function(e){a.show.cadastro=!0}}},[a._v("Comprar ligações")])])]),a._v(" "),a.auth.token?t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("button",{staticClass:"button is-danger button-max button-max-desktop",on:{click:function(e){a.eventoGa("remover-autenticacao",a.info.numero),a.removerAutenticacao()}}},[a._v("Remover Autenticação")])])]):a._e()])]),a._v(" "),a.info.numero?t("div",[t("br"),a._v(" "),t("div",{staticClass:"notification is-primary"},[t("div",[t("b",[a._v(a._s(a.info.numero)+" saldo de "+a._s(a.info.saldo)+" "+a._s(a.info.saldo>1?"Ligações":"Ligação"))]),a._v(" "),t("button",{staticClass:"button is-warning is-small",class:{"is-loading":a.infoAtualizando},on:{click:function(e){a.getInfo(),a.getTransacoes(),a.eventoGa("atualizar-saldo",a.info.numero+" - "+a.info.saldo)}}},[a._v("Atualizar Saldo e Histórico")])])])]):a._e(),a._v(" "),a.auth.token?t("div",[t("div",[t("br"),a._v(" "),t("div",{staticClass:"field is-horizontal"},[t("div",{staticClass:"field-body"},[t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.chamada.mensagem,expression:"chamada.mensagem"}],staticClass:"textarea",attrs:{name:"mensagem",maxlength:"600",placeholder:"(Opcional) Digite uma mensagem, ela será convertida para voz e será tocada antes do gemidão."},domProps:{value:a.chamada.mensagem},on:{input:function(e){e.target.composing||(a.chamada.mensagem=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##)?#####-####",expression:"'(##)?#####-####'"},{name:"model",rawName:"v-model",value:a.chamada.de,expression:"chamada.de"}],staticClass:"input",attrs:{name:"de",type:"text",placeholder:"Numero com ddd do remetente (bina)"},domProps:{value:a.chamada.de},on:{input:function(e){e.target.composing||(a.chamada.de=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##)?#####-####",expression:"'(##)?#####-####'"},{name:"model",rawName:"v-model",value:a.chamada.para,expression:"chamada.para"}],staticClass:"input",attrs:{name:"para",type:"text",placeholder:"Numero com ddd do destinatário"},domProps:{value:a.chamada.para},on:{input:function(e){e.target.composing||(a.chamada.para=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success button-max",class:{"is-loading":a.chamada.enviando},attrs:{disabled:!a.rawNumero(a.chamada.de).match("^[0-9]{10,11}$")||!a.rawNumero(a.chamada.para).match("^[0-9]{10,11}$")||a.info.saldo<=0},on:{click:function(e){a.ligar(),a.eventoGa("ligar",a.info.numero+" de: "+a.chamada.de+" para: "+a.chamada.para)}}},[a._v("Ligar")])])])])])])]):a._e(),a._v(" "),a.transacoes&&a.transacoes.length?t("div",[t("br"),a._v(" "),a._l(a.transacoes,function(e){return t("div",{staticClass:"box"},[t("div",{staticClass:"media"},[t("div",{staticClass:"media-content"},[t("div",{staticClass:"content has-text-centered"},[t("div",{staticClass:"element"},[a._v("De: "),t("b",[a._v(a._s(e.ligacao.de))])]),a._v(" "),t("div",{staticClass:"element"},[a._v("Para: "),t("b",[a._v(a._s(e.ligacao.para))])]),a._v(" "),t("div",{staticClass:"element"},[a._v("Status: "),t("b",[a._v(a._s(e.status_retorno?e.status_retorno:"aguarde..."))])]),a._v(" "),t("div",{staticClass:"element"},[a._v("Data: "),t("b",[a._v(a._s(a.dataFormat(e.cadastro)))])]),a._v(" "),t("div",{staticClass:"element"},[t("button",{staticClass:"button is-success is-small",on:{click:function(t){a.chamada.de=e.ligacao.de,a.chamada.para=e.ligacao.para,a.ligar()}}},[a._v("Religar")])])])])])])})],2):a._e()]):a._e(),a._v(" "),t("br"),a._v(" "),t("div",{staticClass:"field"},[t("div",{staticClass:"field-body"},[a.getTermos()||""!=a.auth.token?a._e():t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-warning button-max button-max-desktop",on:{click:function(e){a.exibirTermos=!a.exibirTermos}}},[a._v("Cadastre-se")])])]),a._v(" "),""==a.auth.token?t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success button-max button-max-desktop",on:{click:function(e){a.show.autenticacao=!0}}},[a._v("Autenticar com número e senha")])])]):a._e()])])]),a._v(" "),a._m(2),a._v(" "),a.exibirTermos?t("div",[t("div",{staticClass:"modal is-active"},[t("div",{staticClass:"modal-background"}),a._v(" "),t("div",{staticClass:"modal-content"},[t("div",{staticClass:"notification is-termo is-my-6"},[a._m(3),a._v(" "),a._m(4),a._v(" "),t("div",{staticClass:"field is-grouped"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success",on:{click:function(e){a.setTermos("1")}}},[a._v("Aceitar")])]),a._v(" "),t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success",on:{click:function(e){a.exibirTermos=!a.exibirTermos}}},[a._v("Recusar")])])])])])])]):a._e(),a._v(" "),a.show.comoUsar?t("div",[t("div",{staticClass:"modal is-active",on:{click:function(e){a.closeModal()}}},[t("div",{staticClass:"modal-background"}),a._v(" "),t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[a._m(5)]),a._v(" "),t("button",{staticClass:"modal-close is-large",on:{click:function(e){a.show.comoUsar=!1}}})])]):a._e(),a._v(" "),a.show.cadastro?t("div",[t("div",{staticClass:"modal is-active",on:{click:function(e){a.closeModal()}}},[t("div",{staticClass:"modal-background"}),a._v(" "),t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[t("div",{staticClass:"notification"},[t("div",[t("div",[t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##)?#####-####",expression:"'(##)?#####-####'"},{name:"model",rawName:"v-model",value:a.meuNumero,expression:"meuNumero"}],staticClass:"input",attrs:{type:"text",placeholder:"Meu celular com ddd"},domProps:{value:a.meuNumero},on:{input:function(e){e.target.composing||(a.meuNumero=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##)?#####-####",expression:"'(##)?#####-####'"},{name:"model",rawName:"v-model",value:a.meuNumero2,expression:"meuNumero2"}],staticClass:"input",attrs:{type:"text",placeholder:"Repetir número"},domProps:{value:a.meuNumero2},on:{input:function(e){e.target.composing||(a.meuNumero2=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-right"},[t("span",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model.number",value:a.planoEscolhido,expression:"planoEscolhido",modifiers:{number:!0}}],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(e){var t="_value"in e?e._value:e.value;return a._n(t)});a.planoEscolhido=e.target.multiple?t:t[0]}}},a._l(a.planos,function(e,s){return t("option",{domProps:{value:s}},[a._v(a._s(s)+" "+a._s(1==s?"Ligação":"Ligações")+" - R$"+a._s(e))])}))])])]),a._v(" "),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("button",{staticClass:"button is-success button-max",class:{"is-loading":a.comprando},attrs:{name:"numeroLogin",disabled:!a.rawNumero(a.meuNumero).match("^[0-9]{10,11}$")||a.meuNumero!=a.meuNumero2},on:{click:function(e){a.comprando=!0,a.comprar(),a.eventoGa("compra","plano "+a.planoEscolhido)}}},[a._v("Comprar")])])])])])])]),a._v(" "),t("button",{staticClass:"modal-close is-large",on:{click:function(e){a.closeModal()}}})])]):a._e(),a._v(" "),a.show.autenticacao?t("div",[t("div",{staticClass:"modal is-active",on:{click:function(e){a.closeModal()}}},[t("div",{staticClass:"modal-background"}),a._v(" "),t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[t("div",{staticClass:"notification"},[t("div",{},[t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##)?#####-####",expression:"'(##)?#####-####'"},{name:"model",rawName:"v-model",value:a.auth.numero,expression:"auth.numero"}],staticClass:"input",attrs:{type:"text",placeholder:"Meu numero com ddd"},domProps:{value:a.auth.numero},on:{input:function(e){e.target.composing||(a.auth.numero=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.auth.senha,expression:"auth.senha"}],staticClass:"input",attrs:{type:"password",placeholder:"Senha"},domProps:{value:a.auth.senha},on:{input:function(e){e.target.composing||(a.auth.senha=e.target.value)}}})])]),a._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-success button-max",class:{"is-loading":a.auth.autenticando},attrs:{disabled:!a.rawNumero(a.auth.numero).match("^[0-9]{10,11}$")||""==a.auth.senha},on:{click:function(e){a.autenticar(),a.eventoGa("autenticacao",a.auth.numero)}}},[a._v("Autenticar")])])])])])]),a._v(" "),t("button",{staticClass:"modal-close is-large",on:{click:function(e){a.closeModal()}}})])]):a._e(),a._v(" "),a.show.info?t("div",[t("div",{staticClass:"modal is-active",on:{click:function(e){a.closeModal()}}},[t("div",{staticClass:"modal-background"}),a._v(" "),t("div",{staticClass:"modal-content",on:{click:function(a){a.stopPropagation()}}},[a._m(6),a._v(" "),a._m(7)]),a._v(" "),t("button",{staticClass:"modal-close is-large",on:{click:function(e){a.closeModal()}}})])]):a._e()])])},staticRenderFns:[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"notification is-success is-my-6"},[t("b",[a._v("Chamada Gemidão é o serviço que realiza ligações para qualquer número (fixo e móvel) do Brasil e ao atender\n          o aúdio mais famoso do Whatsapp é tocado."),t("br")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"fb-like",attrs:{"data-href":"https://www.facebook.com/Chamada-Gemid%C3%A3o-1033730403430716/","data-layout":"standard","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"column"},[t("a",{staticClass:"twitter-timeline",attrs:{href:"https://twitter.com/search?q=chamadagemidao.com","data-widget-id":"892482850624327681"}},[a._v("Tweets sobre chamadagemidao.com")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h4",[t("b",[a._v("Termos de Uso do Chamada Gemidão")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[a._v("Termos e Condições de Compra e Venda de Chamada Gemidao, com sede na https://chamadagemidao.com, doravante denominada simplesmente Chamada Gemidao, e, de outro lado, o cliente Chamada Gemidao, qualificado no momento da compra dos produtos Chamada Gemidao, doravante denominado simplesmente Cliente.\n              "),t("br"),a._v("\n              Considerando que a Chamada Gemidao realiza venda de serviços pela internet; Considerando o interesse do Cliente na compra dos serviços oferecidos pelo Chamada Gemidao; O presente contrato tem por finalidade estabelecer as condições gerais de uso e compra de serviços do cliente do site Chamada Gemidao.\n              "),t("br"),a._v(" "),t("b",[a._v("I.")]),a._v(' Confidencialidade: é de responsabilidade da Chamada Gemidao a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra".\n              '),t("br"),a._v(" "),t("b",[a._v("II.")]),a._v(" Serviço de Atendimento ao Cliente (SAC): O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado por de chat no site.\n              "),t("br"),a._v(" "),t("b",[a._v("III.")]),a._v(" - O Cliente deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC).\n              "),t("br"),a._v(" "),t("b",[a._v("IV.")]),a._v(" - A compra e realizada via PagSeguro por fornecer varias formas de pagamento e segurança.\n              "),t("br"),a._v(" "),t("b",[a._v("V.")]),a._v(" - Em Todas chamadas realizadas é enviado ao destinatário um SMS com o numero real do remetente.\n              "),t("br"),a._v(" "),t("b",[a._v("VI.")]),a._v(" - É de total responsabilidade do cliente (remetente da mensagem) o ocorrimento de eventuais transtornos envolvendo a pessoa ou pessoas que atenderem a ligação proveniente deste serviço.\n          ")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"notification is-my-6"},[t("h3",{staticClass:"h3"},[a._v("Como cadastrar")]),a._v(" "),t("ul",[t("li",[a._v("É necessário comprar ligação para usar o sistema. Selecione o pacote desejado, realize o pagamento via PagSeguro, quando o pagamento for aprovado o crédito será liberado e voce receberá um SMS com a senha para o acesso.")])]),t("br"),a._v(" "),t("h3",{staticClass:"h3"},[a._v("Autenticação")]),a._v(" "),t("ul",[t("li",[a._v("\n                Insira o seu número de celular com ddd e a senha recebido por SMS e clique no botão autenticar.\n              ")])]),t("br"),a._v(" "),t("h3",{staticClass:"h3"},[a._v("Realizando ligações")]),a._v(" "),t("ul",[t("li",[a._v("Insira o número que irá aparecer na bina (exatamente, você pode alterar o numero que será exibido) e o número do destinatário, após 2 minutos que o destinatário atender ele irá receber um SMS com o número real do remetente.")])]),t("br"),a._v(" "),t("h3",{staticClass:"h3"},[a._v("Pós ligações realizadas")]),a._v(" "),t("ul",[t("li",[a._v('\n                Após realizar a ligação, o extrato de ligações exibirá o status da chamada, "atendida" significa que a ligação foi atendida pelo destinatário, caso outro status seja exibido o saldo da ligação é devolvido.\n              ')])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"notification is-danger is-my-6"},[t("b",[a._v('Atenção, ligações que cair na caixa postal serão cobradas e ficarão com status "atendida", se ainda houver dúvidas pode entrar em contato com o suporte.\n            ')])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"notification is-my-6 is-termo"},[t("dl",[t("dd",[a._v("- Sempre o destinatário recebe o SMS com o número do remetente original, exceto quando o numero do destinatário é fixo")]),t("br"),a._v(" "),t("dd",[a._v("- As compras são processadas pelo PagSeguro e quando a compra fica com o status aprovado o crédito é liberado")]),t("br"),a._v(" "),t("dd",[a._v("- Compra por boleto: O crédito é liberado após a aprovação do pagamento junto com a senha")]),t("br"),a._v(" "),t("dd",[a._v("- Caso necessite gerar uma nova senha entre em contato com o suporte")]),t("br"),a._v(" "),t("dd",[a._v("- Sempre insirá os números com ddd")]),t("br")])])}]}}},[148]);
//# sourceMappingURL=app.54ddb7c7e237555db20c.js.map
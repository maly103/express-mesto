(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], [,,,, function (e, t, a) { e.exports = `${a.p}static/media/Vector.c6f11019.svg`; }, function (e, t, a) { e.exports = `${a.p}static/media/avatar.256a3224.jpg`; },,, function (e, t, a) { e.exports = a(14); },,,,, function (e, t, a) {}, function (e, t, a) {
  a.r(t); const n = a(0); const r = a.n(n); const o = a(3); const c = a.n(o); const l = (a(13), a(1)); const i = a(4); const s = a.n(i); const u = a(5); const p = a.n(u); const m = function (e) { const t = e.src; const a = e.alt; return r.a.createElement('header', { className: 'header' }, r.a.createElement('img', { className: 'logo header__logo', src: t, alt: a })); }; const d = r.a.createContext(); const _ = a(6); const h = a(7); const f = new (function () { function e(t, a) { Object(_.a)(this, e), this._url = t, this._id = a; } return Object(h.a)(e, [{ key: 'renderResult', value(e) { return e.ok ? e.json() : Promise.reject(new Error('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status))); } }, { key: 'getAllCards', value(e) { const t = this; return fetch(''.concat(this._url).concat(e), { method: 'GET', headers: { 'Content-type': 'application/json', authorization: this._id } }).then(((e) => t.renderResult(e))); } }, { key: 'getUserData', value(e) { const t = this; return fetch(''.concat(this._url).concat(e), { method: 'GET', headers: { 'Content-type': 'application/json', authorization: this._id } }).then(((e) => t.renderResult(e))); } }, { key: 'getAllData', value() { return Promise.all([this.getAllCards('cards'), this.getUserData('users/me')]); } }, { key: 'setUserData', value(e, t, a) { const n = this; return fetch(''.concat(this._url).concat(e), { method: 'PATCH', headers: { authorization: this._id, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: t, about: a }) }).then(((e) => n.renderResult(e))); } }, { key: 'setUserAvatar', value(e, t) { const a = this; return fetch(''.concat(this._url).concat(e), { method: 'PATCH', headers: { authorization: this._id, 'Content-Type': 'application/json' }, body: JSON.stringify({ avatar: t }) }).then(((e) => a.renderResult(e))); } }, { key: 'addCard', value(e, t, a) { const n = this; return fetch(''.concat(this._url).concat(e), { method: 'POST', headers: { authorization: this._id, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: t, link: a }) }).then(((e) => n.renderResult(e))); } }, { key: 'deleteCard', value(e) { const t = this; return fetch(''.concat(this._url).concat(e), { method: 'DELETE', headers: { authorization: this._id, 'Content-type': 'application/json' } }).then(((e) => t.renderResult(e))); } }, { key: 'likeCard', value(e) { const t = this; return fetch(''.concat(this._url).concat(e), { method: 'PUT', headers: { authorization: this._id, 'Content-type': 'application/json' } }).then(((e) => t.renderResult(e))); } }, { key: 'dislikeCard', value(e) { const t = this; return fetch(''.concat(this._url).concat(e), { method: 'DELETE', headers: { authorization: this._id, 'Content-type': 'application/json' } }).then(((e) => t.renderResult(e))); } }]), e; }())('https://mesto.nomoreparties.co/v1/cohort-15/', '4067a4e9-5097-4e1c-8918-5df0a6c984ef'); const E = {
    data: {
      inputSelector: '.popup__text', submitButtonSelector: '.popup__send', inactiveButtonClass: 'popup__send_inactive', inputErrorClass: 'popup__text_type_error', errorClass: 'popup__text-error_active',
    },
    renderLoading(e, t) { t.textContent = e ? '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...' : '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'; },
    renderError(e) { console.log(e); },
  }; const v = function (e) {
    const t = e.card; const a = e.onCardClick; const n = r.a.useContext(d); const o = t.iduser === n.id; const c = 'elements__trash '.concat(o ? '' : 'elements__trash_hidden'); return r.a.createElement('li', { className: 'elements__item' }, r.a.createElement('button', { className: c, type: 'button' }), r.a.createElement('img', {
      className: 'elements__img', src: t.link, alt: t.name, onClick() { a(t); },
    }), r.a.createElement('div', { className: 'elements__footer' }, r.a.createElement('h2', { className: 'elements__title' }, t.name), r.a.createElement('div', { className: 'elements__like' }, r.a.createElement('button', { className: 'elements__heart', type: 'button' }), r.a.createElement('p', { className: 'elements__col' }, t.like))));
  }; const C = function (e) {
    e.src; const t = e.alt; const a = (e.title, e.subtitle, e.onEditAvatar); const n = e.onEditProfile; const o = e.onAddPlace; const c = e.onCardClick; const i = r.a.useContext(d); const s = r.a.useState([]); const u = Object(l.a)(s, 2); const p = u[0]; const m = u[1]; return r.a.useEffect((() => {
      f.getAllCards('cards').then(((e) => {
        const t = e.map(((e) => ({
          idCard: e._id, name: e.name, link: e.link, like: e.likes.length, idUser: e.owner._id,
        }))); m(t);
      })).catch(((e) => { E(e); }));
    }), []), r.a.createElement('main', { className: 'main' }, r.a.createElement('section', { className: 'profile' }, r.a.createElement('div', { className: 'profile__wrapper-avatar', onClick: a }, r.a.createElement('img', { src: i.avatar, alt: t, className: 'profile__avatar' })), r.a.createElement('div', { className: 'profile__intro' }, r.a.createElement('h1', { className: 'profile__title' }, i.name), r.a.createElement('button', { className: 'profile__edit', type: 'button', onClick: n }), r.a.createElement('p', { className: 'profile__subtitle' }, i.about)), r.a.createElement('button', { className: 'profile__add', type: 'button', onClick: o })), r.a.createElement('section', null, r.a.createElement('ul', { className: 'elements' }, p.map(((e) => r.a.createElement(v, { key: e.idCard, card: e, onCardClick: c }))))));
  }; const N = function () { return r.a.createElement('footer', { className: 'footer' }, r.a.createElement('p', { className: 'footer__text' }, '\xa9 2020 Mesto Russia')); }; const y = function (e) {
    const t = e.name; const a = e.titleForm; const n = e.children; const o = e.titleButton; const c = e.isOpen; const l = e.modeButton; const i = e.onClose; return r.a.createElement('section', { className: c ? 'popup popup_type_'.concat(t, ' popup_opened') : 'popup popup_type_'.concat(t) }, r.a.createElement('form', {
      action: '#', className: 'popup__container', name: 'popup-'.concat(t), noValidate: !0,
    }, r.a.createElement('button', { className: 'popup__close', type: 'button', onClick: i }), r.a.createElement('h2', { className: 'popup__title' }, a), n, r.a.createElement('button', { className: l ? 'popup__send '.concat(l) : 'popup__send', type: 'submit' }, o)));
  }; const b = function (e) { const t = e.card; const a = e.onClose; return r.a.createElement('section', { className: t.link ? 'popup popup_type_image popup_opened' : 'popup popup_type_image' }, r.a.createElement('div', { className: 'popup__container-image' }, r.a.createElement('button', { className: 'popup__close', type: 'button', onClick: a }), r.a.createElement('img', { src: t.link, className: 'popup__image', alt: '\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430' }), r.a.createElement('p', { className: 'popup__text-image' }, t.name))); }; const g = function () {
    const e = r.a.useState(!1); const t = Object(l.a)(e, 2); const a = t[0]; const n = t[1]; const o = r.a.useState(!1); const c = Object(l.a)(o, 2); const i = c[0]; const u = c[1]; const _ = r.a.useState(!1); const h = Object(l.a)(_, 2); const v = h[0]; const g = h[1]; const k = r.a.useState({}); const x = Object(l.a)(k, 2); const j = x[0]; const O = x[1]; const B = r.a.useState({}); const S = Object(l.a)(B, 2); const A = S[0]; const P = S[1]; const T = function () { n(!1), g(!1), u(!1), O({}); }; return r.a.useEffect((() => {
      f.getUserData('users/me').then(((e) => {
        const t = e.name; const a = e.about; const n = e.avatar; const r = e._id; P({
          name: t, about: a, avatar: n, id: r,
        });
      })).catch(((e) => { E(e); }));
    }), []), r.a.createElement('div', null, r.a.createElement(d.Provider, { value: A }, r.a.createElement(y, {
      name: 'edit',
      titleForm: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
      children: r.a.createElement(r.a.Fragment, null, r.a.createElement('input', {
        className: 'popup__text', type: 'text', name: 'prof-title', required: !0, minLength: '2', maxLength: '40', autoComplete: 'off',
      }), r.a.createElement('span', { className: 'popup__text-error', id: 'prof-title-error' }), r.a.createElement('input', {
        className: 'popup__text', type: 'text', name: 'prof-subtitle', required: !0, minLength: '2', maxLength: '200', autoComplete: 'off',
      }), r.a.createElement('span', { className: 'popup__text-error', id: 'prof-subtitle-error' })),
      titleButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
      isOpen: a,
      modeButton: '',
      onClose: T,
    }), r.a.createElement(y, {
      name: 'submit', titleForm: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', children: r.a.createElement(r.a.Fragment, null), titleButton: '\u0414\u0430', isOpen: '', modeButton: 'popup__send_type_delete', onClose: T,
    }), r.a.createElement(y, {
      name: 'new',
      titleForm: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
      children: r.a.createElement(r.a.Fragment, null, r.a.createElement('input', {
        className: 'popup__text', type: 'text', name: 'mesto', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', required: !0, minLength: '1', maxLength: '30', autoComplete: 'off',
      }), r.a.createElement('span', { className: 'popup__text-error', id: 'mesto-error' }), r.a.createElement('input', {
        className: 'popup__text', type: 'url', name: 'mesto-url', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', required: !0,
      }), r.a.createElement('span', { className: 'popup__text-error', id: 'mesto-url-error' })),
      titleButton: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
      isOpen: i,
      modeButton: '',
      onClose: T,
    }), r.a.createElement(y, {
      name: 'avatar',
      titleForm: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
      children: r.a.createElement(r.a.Fragment, null, r.a.createElement('input', {
        className: 'popup__text', type: 'url', name: 'avatar-url', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440', required: !0,
      }), r.a.createElement('span', { className: 'popup__text-error', id: 'avatar-url-error' })),
      titleButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
      isOpen: v,
      modeButton: '',
      onClose: T,
    }), r.a.createElement(b, { card: j, onClose: T }), r.a.createElement(m, { src: s.a, alt: '\u043b\u043e\u0433\u043e\u0442\u0438\u043f' }), r.a.createElement(C, {
      src: p.a, alt: '\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430', title: '\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e', subtitle: '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430', onEditAvatar() { g(!0); }, onEditProfile() { n(!0); }, onAddPlace() { u(!0); }, onCardClick(e) { O(e); },
    }), r.a.createElement(N, null)));
  }; c.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(g, null)), document.getElementById('root'));
}], [[8, 1, 2]]]);
// # sourceMappingURL=main.08058951.chunk.js.map

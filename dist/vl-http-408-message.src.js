import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-408-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, dat duurde iets te lang',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek duurt te lang',
      text: `<p>Uw verzoek duurde te lang en werd gestopt. Geen paniek, u kunt de pagina opnieuw opvragen. Blijft deze boodschap verschijnen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 408">Mail dan de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 408.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});


import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-500-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, er is iets fout gelopen',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onverwachte fout',
      text: `<p>Uw verzoek is fout gelopen. Gelieve opnieuw te proberen. Vragen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 500. Onze excuses voor het ongemak.</p>`,
      actions: `<a is="vl-link-button" href="${document.referrer}">Terug naar de pagina</a>`,
    });
  }
});


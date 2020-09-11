import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-503-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, tijdelijk niet beschikbaar',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Tijdelijk niet beschikbaar',
      text: `<p>We doen er alles aan om de website zo snel mogelijk terug ter beschikking te hebben. Probeer later opnieuw. Vragen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 503">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 503.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});


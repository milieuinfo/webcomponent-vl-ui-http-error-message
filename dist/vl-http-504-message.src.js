import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-504-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, tijdelijk niet bereikbaar',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Tijdelijk niet bereikbaar',
      text: `<p>We doen er alles aan om de website zo snel mogelijk terug bereikbaar te maken. Probeer later opnieuw. Vragen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 504">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 504.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});


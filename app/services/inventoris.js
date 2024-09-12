import Service from '@ember/service';
import fetch from 'fetch';

export default class InventorisService extends Service {
  async searchByAddress(address) {
    const url = `https://inventaris.onroerenderfgoed.be/erfgoedobjecten?straat=${address.straatnaam}&gemeente=${address.gemeentenaam}&per_pagina=1000`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return await res.json();
  }
}

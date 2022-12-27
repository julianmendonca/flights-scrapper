const cypressConfig = require("../../cypress.config")

describe('Despegar.com', () => {
	it('From buenos aires to madrid', () => {
		cy.visit('https://www.despegar.com.ar/shop/flights/results/roundtrip/BUE/MAD/2023-09-01/2023-11-21/1/0/0/NA/NA/NA/NA/NA?from=SB&di=1-0')
	})
})
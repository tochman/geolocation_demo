import stubLocation from '../support/stubLocation'

describe('User Can See His Location On The Page', () => {

	it('When Accessing The Page', () => {
		cy.visit('http://localhost:3001', stubLocation({latitude: '57.828000', longitude: '12.241660'}))
		cy.get('h1').should('contain', 'Hello visitor from 57.828000 lat and 12.241660 long')
	});
});
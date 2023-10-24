describe('This spec will be used to test the ATM search functionality', () => {
    
    //1. Open https://www.hsbc.co.in/
    beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
    })
   
    it('Validated the ATM search', () => {

//2. Validate HSBC Bank Logo
cy.xpath("//img[@alt='HSBC India Bank']")

//3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving
cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');

//4. Click on Login button
cy.xpath("//div//a[@role='button'][normalize-space()='Log On']")

//5. Validate Log On header in Login page
cy.xpath('//h2/span[text()=" Log On   "]').should('exist');

//6. Check Continue button is available
cy.xpath('//button/span[text()=" Continue "]').should('exist');

//7. Also validate initially Continue button is disabled.
cy.xpath('//*[@id="username_submit_btn"]').should('be.disabled');

//8. Type any random email in the username field
cy.xpath('//*[@id="username"]').type('kaviya@test.com');

//9. Now check Continue button is Enabled
cy.xpath('//*[@id="username_submit_btn"]').should('be.enabled');

//10. Validate Remember me check box is not checked by default
cy.xpath('//*[@id="rememberMe"]').should('not.be.checked');  

//11. Validate there is a question mark tooltip present on the page
cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('exist');

//12. Click on the tooltip
cy.xpath('//*[@id="username_help_link"]/span/span[1]').click();  

//13. Now validate the username header in the new pop-up screen
cy.xpath('//*[@id="help_content_1"]/h3/span').should('exist');

//14. Validate there is a Close button in the new pop-up screen
cy.xpath('//*[@id="Close_dob_exception"]').click();

//15. Click on the close button present in the new pop-up screen
cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').click();

    })
})
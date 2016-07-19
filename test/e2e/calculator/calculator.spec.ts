describe('Calculator', ()=>{

  it('should exists calc div', ()=>{
    browser.get('http://127.0.0.1:8080/')
    element(by.id('op1')).sendKeys('2')
    element(by.id('op2')).sendKeys('4')
    element(by.id('suma')).click()
    expect(element(by.id('result')).getText()).toEqual('6')
  })

})

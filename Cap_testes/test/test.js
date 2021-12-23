var {expect} = require('chai');

const Province = require('../model/Province')
const {sampleProvinceData} = require('../index')

describe('province', function() {

  let asia
  beforeEach(function() {
    asia = new Province(sampleProvinceData())
  })

  it('shortfall', function(){
    expect(asia.shortfall).equal(5)
  })
  
  it('profit', function(){
    expect(asia.profit).equal(230)
  })

  it('change production', function(){
    asia.producers[0].production = 20
    expect(asia.shortfall).equal(-6)
    expect(asia.profit).equal(292)
  })

  // Teste malicioso para identificar string vazias
  // it('empty string demand', function(){
  //   asia.demand = ""
  //   expect(asia.shortfall).NaN
  //   expect(asia.profit).NaN
  // })


})



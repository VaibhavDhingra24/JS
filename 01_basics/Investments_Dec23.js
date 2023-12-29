var Mirae_Cost = 65000
var ICICI_Cost = 63000
var PPFAS_Cost = 33000
var Tata_Cost = 33000

const Total_Investment = Mirae_Cost + ICICI_Cost + PPFAS_Cost +Tata_Cost
 // console.log(Total_Investment) // 194000

console.table([Mirae_Cost, ICICI_Cost, PPFAS_Cost, Tata_Cost, Total_Investment ])

var Mirae_Value = 77390
var ICICI_Value = 69806.620
var PPFAS_Value = 39004.780
var Tata_Value = 40268.330

const Total_Value = Mirae_Value + ICICI_Value + PPFAS_Value +Tata_Value
 // console.log(Total_Investment) // 194000

console.table([Mirae_Value, ICICI_Value, PPFAS_Value, Tata_Value, Total_Value ])

const Net_Gain = Total_Value - Total_Investment
console.log(Net_Gain)

const Percentage_Gain = (Net_Gain/Total_Investment)*100

console.log(Percentage_Gain)
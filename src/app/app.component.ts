import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CurrencyApiService } from './services/currency-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor,NgIf, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {


  arr: { Country: string; Currency: string }[] = [{ Country: "Select Country", Currency: "" },
  { Country: "Afghanistan", Currency: "AFN" },
  { Country: "Åland Islands", Currency: "EUR" },
  { Country: "Albania", Currency: "ALL" },
  { Country: "Algeria", Currency: "DZD" },
  { Country: "American Samoa", Currency: "USD" },
  { Country: "Andorra", Currency: "EUR" },
  { Country: "Angola", Currency: "AOA" },
  { Country: "Anguilla", Currency: "XCD" },
  { Country: "Antarctica", Currency: "AAD" },
  { Country: "Antigua and Barbuda", Currency: "XCD" },
  { Country: "Argentina", Currency: "ARS" },
  { Country: "Armenia", Currency: "AMD" },
  { Country: "Aruba", Currency: "AWG" },
  { Country: "Australia", Currency: "AUD" },
  { Country: "Austria", Currency: "EUR" },
  { Country: "Azerbaijan", Currency: "AZN" },
  { Country: "Bahamas", Currency: "BSD" },
  { Country: "Bahrain", Currency: "BHD" },
  { Country: "Bangladesh", Currency: "BDT" },
  { Country: "Barbados", Currency: "BBD" },
  { Country: "Belarus", Currency: "BYN" },
  { Country: "Belgium", Currency: "EUR" },
  { Country: "Belize", Currency: "BZD" },
  { Country: "Benin", Currency: "XOF" },
  { Country: "Bermuda", Currency: "BMD" },
  { Country: "Bhutan", Currency: "BTN" },
  { Country: "Bolivia (Plurinational State of)", Currency: "BOB" },
  { Country: "Bosnia and Herzegovina", Currency: "BAM" },
  { Country: "Botswana", Currency: "BWP" },
  { Country: "Bouvet Island", Currency: "NOK" },
  { Country: "Brazil", Currency: "BRL" },
  { Country: "British Indian Ocean Territory", Currency: "USD" },
  { Country: "Brunei Darussalam", Currency: "BND" },
  { Country: "Bulgaria", Currency: "BGN" },
  { Country: "Burkina Faso", Currency: "XOF" },
  { Country: "Burundi", Currency: "BIF" },
  { Country: "Cabo Verde", Currency: "CVE" },
  { Country: "Cambodia", Currency: "KHR" },
  { Country: "Cameroon", Currency: "XAF" },
  { Country: "Canada", Currency: "CAD" },
  { Country: "Caribbean Netherlands", Currency: "USD" },
  { Country: "Cayman Islands", Currency: "KYD" },
  { Country: "Central African Republic", Currency: "XAF" },
  { Country: "Chad", Currency: "XAF" },
  { Country: "Chile", Currency: "CLP" },
  { Country: "China", Currency: "CNY" },
  { Country: "Christmas Island", Currency: "AUD" },
  { Country: "Cocos (Keeling) Islands", Currency: "AUD" },
  { Country: "Colombia", Currency: "COP" },
  { Country: "Comoros", Currency: "KMF" },
  { Country: "Congo", Currency: "XAF" },
  { Country: "Congo, Democratic Republic of the", Currency: "CDF" },
  { Country: "Cook Islands", Currency: "NZD" },
  { Country: "Costa Rica", Currency: "CRC" },
  { Country: "Croatia", Currency: "HRK" },
  { Country: "Cuba", Currency: "CUP" },
  { Country: "Curaçao", Currency: "ANG" },
  { Country: "Cyprus", Currency: "EUR" },
  { Country: "Czech Republic", Currency: "CZK" },
  { Country: "Côte d'Ivoire", Currency: "XOF" },
  { Country: "Denmark", Currency: "DKK" },
  { Country: "Djibouti", Currency: "DJF" },
  { Country: "Dominica", Currency: "XCD" },
  { Country: "Dominican Republic", Currency: "DOP" },
  { Country: "Ecuador", Currency: "USD" },
  { Country: "Egypt", Currency: "EGP" },
  { Country: "El Salvador", Currency: "USD" },
  { Country: "Equatorial Guinea", Currency: "XAF" },
  { Country: "Eritrea", Currency: "ERN" },
  { Country: "Estonia", Currency: "EUR" },
  { Country: "Eswatini (Swaziland)", Currency: "SZL" },
  { Country: "Ethiopia", Currency: "ETB" },
  { Country: "Falkland Islands (Malvinas)", Currency: "FKP" },
  { Country: "Faroe Islands", Currency: "DKK" },
  { Country: "Fiji", Currency: "FJD" },
  { Country: "Finland", Currency: "EUR" },
  { Country: "France", Currency: "EUR" },
  { Country: "French Guiana", Currency: "EUR" },
  { Country: "French Polynesia", Currency: "XPF" },
  { Country: "French Southern Territories", Currency: "EUR" },
  { Country: "Gabon", Currency: "XAF" },
  { Country: "Gambia", Currency: "GMD" },
  { Country: "Georgia", Currency: "GEL" },
  { Country: "Germany", Currency: "EUR" },
  { Country: "Ghana", Currency: "GHS" },
  { Country: "Gibraltar", Currency: "GIP" },
  { Country: "Greece", Currency: "EUR" },
  { Country: "Greenland", Currency: "DKK" },
  { Country: "Grenada", Currency: "XCD" },
  { Country: "Guadeloupe", Currency: "EUR" },
  { Country: "Guam", Currency: "USD" },
  { Country: "Guatemala", Currency: "GTQ" },
  { Country: "Guernsey", Currency: "GBP" },
  { Country: "Guinea", Currency: "GNF" },
  { Country: "Guinea-Bissau", Currency: "XOF" },
  { Country: "Guyana", Currency: "GYD" },
  { Country: "Haiti", Currency: "HTG" },
  { Country: "Heard Island and Mcdonald Islands", Currency: "AUD" },
  { Country: "Honduras", Currency: "HNL" },
  { Country: "Hong Kong", Currency: "HKD" },
  { Country: "Hungary", Currency: "HUF" },
  { Country: "Iceland", Currency: "ISK" },
  { Country: "India", Currency: "INR" },
  { Country: "Indonesia", Currency: "IDR" },
  { Country: "Iran", Currency: "IRR" },
  { Country: "Iraq", Currency: "IQD" },
  { Country: "Ireland", Currency: "EUR" },
  { Country: "Isle of Man", Currency: "GBP" },
  { Country: "Israel", Currency: "ILS" },
  { Country: "Italy", Currency: "EUR" },
  { Country: "Jamaica", Currency: "JMD" },
  { Country: "Japan", Currency: "JPY" },
  { Country: "Jersey", Currency: "GBP" },
  { Country: "Jordan", Currency: "JOD" },
  { Country: "Kazakhstan", Currency: "KZT" },
  { Country: "Kenya", Currency: "KES" },
  { Country: "Kiribati", Currency: "AUD" },
  { Country: "Korea, North", Currency: "KPW" },
  { Country: "Korea, South", Currency: "KRW" },
  { Country: "Kosovo", Currency: "EUR" },
  { Country: "Kuwait", Currency: "KWD" },
  { Country: "Kyrgyzstan", Currency: "KGS" },
  { Country: "Lao People's Democratic Republic", Currency: "LAK" },
  { Country: "Latvia", Currency: "EUR" },
  { Country: "Lebanon", Currency: "LBP" },
  { Country: "Lesotho", Currency: "LSL" },
  { Country: "Liberia", Currency: "LRD" },
  { Country: "Libya", Currency: "LYD" },
  { Country: "Liechtenstein", Currency: "CHF" },
  { Country: "Lithuania", Currency: "EUR" },
  { Country: "Luxembourg", Currency: "EUR" },
  { Country: "Macao", Currency: "MOP" },
  { Country: "Macedonia North", Currency: "MKD" },
  { Country: "Madagascar", Currency: "MGA" },
  { Country: "Malawi", Currency: "MWK" },
  { Country: "Malaysia", Currency: "MYR" },
  { Country: "Maldives", Currency: "MVR" },
  { Country: "Mali", Currency: "XOF" },
  { Country: "Malta", Currency: "EUR" },
  { Country: "Marshall Islands", Currency: "USD" },
  { Country: "Martinique", Currency: "EUR" },
  { Country: "Mauritania", Currency: "MRO" },
  { Country: "Mauritius", Currency: "MUR" },
  { Country: "Mayotte", Currency: "EUR" },
  { Country: "Mexico", Currency: "MXN" },
  { Country: "Micronesia", Currency: "USD" },
  { Country: "Moldova", Currency: "MDL" },
  { Country: "Monaco", Currency: "EUR" },
  { Country: "Mongolia", Currency: "MNT" },
  { Country: "Montenegro", Currency: "EUR" },
  { Country: "Montserrat", Currency: "XCD" },
  { Country: "Morocco", Currency: "MAD" },
  { Country: "Mozambique", Currency: "MZN" },
  { Country: "Myanmar (Burma)", Currency: "MMK" },
  { Country: "Namibia", Currency: "NAD" },
  { Country: "Nauru", Currency: "AUD" },
  { Country: "Nepal", Currency: "NPR" },
  { Country: "Netherlands", Currency: "EUR" },
  { Country: "New Caledonia", Currency: "XPF" },
  { Country: "New Zealand", Currency: "NZD" },
  { Country: "Nicaragua", Currency: "NIO" },
  { Country: "Niger", Currency: "XOF" },
  { Country: "Nigeria", Currency: "NGN" },
  { Country: "Niue", Currency: "NZD" },
  { Country: "Norfolk Island", Currency: "AUD" },
  { Country: "Northern Mariana Islands", Currency: "USD" },
  { Country: "Norway", Currency: "NOK" },
  { Country: "Oman", Currency: "OMR" },
  { Country: "Pakistan", Currency: "PKR" },
  { Country: "Palau", Currency: "USD" },
  { Country: "Palestine", Currency: "ILS" },
  { Country: "Panama", Currency: "PAB" },
  { Country: "Papua New Guinea", Currency: "PGK" },
  { Country: "Paraguay", Currency: "PYG" },
  { Country: "Peru", Currency: "PEN" },
  { Country: "Philippines", Currency: "PHP" },
  { Country: "Pitcairn Islands", Currency: "NZD" },
  { Country: "Poland", Currency: "PLN" },
  { Country: "Portugal", Currency: "EUR" },
  { Country: "Puerto Rico", Currency: "USD" },
  { Country: "Qatar", Currency: "QAR" },
  { Country: "Reunion", Currency: "EUR" },
  { Country: "Romania", Currency: "RON" },
  { Country: "Russian Federation", Currency: "RUB" },
  { Country: "Rwanda", Currency: "RWF" },
  { Country: "Saint Barthelemy", Currency: "EUR" },
  { Country: "Saint Helena", Currency: "SHP" },
  { Country: "Saint Kitts and Nevis", Currency: "XCD" },
  { Country: "Saint Lucia", Currency: "XCD" },
  { Country: "Saint Martin", Currency: "EUR" },
  { Country: "Saint Pierre and Miquelon", Currency: "EUR" },
  { Country: "Saint Vincent and the Grenadines", Currency: "XCD" },
  { Country: "Samoa", Currency: "WST" },
  { Country: "San Marino", Currency: "EUR" },
  { Country: "Sao Tome and Principe", Currency: "STD" },
  { Country: "Saudi Arabia", Currency: "SAR" },
  { Country: "Senegal", Currency: "XOF" },
  { Country: "Serbia", Currency: "RSD" },
  { Country: "Seychelles", Currency: "SCR" },
  { Country: "Sierra Leone", Currency: "SLL" },
  { Country: "Singapore", Currency: "SGD" },
  { Country: "Sint Maarten", Currency: "ANG" },
  { Country: "Slovakia", Currency: "EUR" },
  { Country: "Slovenia", Currency: "EUR" },
  { Country: "Solomon Islands", Currency: "SBD" },
  { Country: "Somalia", Currency: "SOS" },
  { Country: "South Africa", Currency: "ZAR" },
  { Country: "South Georgia and the South Sandwich Islands", Currency: "GBP" },
  { Country: "South Sudan", Currency: "SSP" },
  { Country: "Spain", Currency: "EUR" },
  { Country: "Sri Lanka", Currency: "LKR" },
  { Country: "Sudan", Currency: "SDG" },
  { Country: "SuriCountry", Currency: "SRD" },
  { Country: "Svalbard and Jan Mayen", Currency: "NOK" },
  { Country: "Sweden", Currency: "SEK" },
  { Country: "Switzerland", Currency: "CHF" },
  { Country: "Syria", Currency: "SYP" },
  { Country: "Taiwan", Currency: "TWD" },
  { Country: "Tajikistan", Currency: "TJS" },
  { Country: "Tanzania", Currency: "TZS" },
  { Country: "Thailand", Currency: "THB" },
  { Country: "Timor-Leste", Currency: "USD" },
  { Country: "Togo", Currency: "XOF" },
  { Country: "Tokelau", Currency: "NZD" },
  { Country: "Tonga", Currency: "TOP" },
  { Country: "Trinidad and Tobago", Currency: "TTD" },
  { Country: "Tunisia", Currency: "TND" },
  { Country: "Turkey (Türkiye)", Currency: "TRY" },
  { Country: "Turkmenistan", Currency: "TMT" },
  { Country: "Turks and Caicos Islands", Currency: "USD" },
  { Country: "Tuvalu", Currency: "AUD" },
  { Country: "U.S. Outlying Islands", Currency: "USD" },
  { Country: "Uganda", Currency: "UGX" },
  { Country: "Ukraine", Currency: "UAH" },
  { Country: "United Arab Emirates", Currency: "AED" },
  { Country: "United Kingdom", Currency: "GBP" },
  { Country: "United States", Currency: "USD" },
  { Country: "Uruguay", Currency: "UYU" },
  { Country: "Uzbekistan", Currency: "UZS" },
  { Country: "Vanuatu", Currency: "VUV" },
  { Country: "Vatican City Holy See", Currency: "EUR" },
  { Country: "Venezuela", Currency: "VEF" },
  { Country: "Vietnam", Currency: "VND" },
  { Country: "Virgin Islands, British", Currency: "USD" },
  { Country: "Virgin Islands, U.S", Currency: "USD" },
  { Country: "Wallis and Futuna", Currency: "XPF" },
  { Country: "Western Sahara", Currency: "MAD" },
  { Country: "Yemen", Currency: "YER" },
  { Country: "Zambia", Currency: "ZMW" },
  { Country: "Zimbabwe", Currency: "ZWL" }
  ];

  currencyForm!:FormGroup;
  
  convertedValue: string ='';
  fromCurrency: string = "";
  toCurrency: string = "";
  fromAmount:string="";
  toAmount:string="";
  flag: boolean = false;
  convertionRate:string='';
  
  constructor(private userService: CurrencyApiService, private fb: FormBuilder) {
    this.currencyForm=fb.group({
      from:'',
      to:'',
      fromAmount:'',
      toAmount:''
    })
  }

  ngOnInit(){
    this.currencyForm.get('fromAmount')?.valueChanges.subscribe(val=>{
      if(val!=''&&this.currencyForm.value.from && this.currencyForm.value.to){
        this.flag=false; 
        this.fromAmount=val;
        this.userService.currencyConvert(this.currencyForm.value.from, this.currencyForm.value.to,val).subscribe({
          next:(data:any)=>{
            this.convertedValue=data['result'].toFixed(2);
            // console.log(this.convertedValue);
            console.log(this.flag);
          },
          error:(err)=>{
            alert('Conversion failed. Please try again.');
          }
        });
        this.userService.convertionRate(this.currencyForm.value.from).subscribe({
          next: (data:any)=>{
            // console.log(data['results'][this.currencyForm.value.to]);
            this.convertionRate='1.00  '+this.fromCurrency+" = "+data['results'][this.currencyForm.value.to].toFixed(2)+"  "+this.toCurrency;
          },
          error:(err)=>{
            alert('Conversion failed. Please try again.');
          }
        })
      }
      console.log(val);
      if(val==''){
        this.clearAmounts();
      }
      
    })

    this.currencyForm.get('toAmount')?.valueChanges.subscribe(val=>{
      if(val&&this.currencyForm.value.from && this.currencyForm.value.to){
        this.flag=true;
        this.toAmount=val;
        this.userService.currencyConvert(this.currencyForm.value.to, this.currencyForm.value.from,val).subscribe((data:any)=>{
          this.convertedValue=data['result'].toFixed(2);
          console.log(this.convertedValue);
          console.log(this.flag);
        });
        this.userService.convertionRate(this.currencyForm.value.to).subscribe((data:any)=>{
          // console.log(data['results'][this.currencyForm.value.to]);
          this.convertionRate='1.00  '+this.toCurrency+" = "+data['results'][this.currencyForm.value.from].toFixed(2)+"  "+this.fromCurrency;
        })
      }
      if(val=''){
        this.clearAmounts();
      }
    })

    this.currencyForm.get('from')?.valueChanges.subscribe(val=>{
      this.fromCurrency=val;
      // this.toCurrency=val;
    })

    this.currencyForm.get('to')?.valueChanges.subscribe(val=>{
      this.toCurrency=val;
      // this.toCurrency=val;
    })

    this.currencyForm.get('from')?.valueChanges.subscribe(() => {
      
      this.clearAmounts();
    });

    this.currencyForm.get('to')?.valueChanges.subscribe(() => {
      this.clearAmounts();
    });

  }
  
  clearAmounts() {
    this.currencyForm.patchValue({ fromAmount: '', toAmount: '' },{emitEvent:false});
    this.convertedValue = '';
    this.convertionRate='';
    console.log("hi");
    
  }



  

  // change(from: string, to: string) {
  //   this.fromCurrency = from;
  //   this.toCurrency = to;
  //   // console.log(this.from);

  // }

  // add(from:string,to:string,amount:string){
  //   if(amount!=""&&this.fromCurrency!=""&&this.toCurrency!=""){
  //     this.userService.currencyConvert(this.fromCurrency,this.toCurrency,amount).subscribe((data:any)=>{
  //     this.convertedValue=data['result'];
  //     // this.flag=this.flag
  //   })
  //   }
  //   else{
  //     this.convertedValue=0;
  //   }
  // }

  // onAmountChange(amount: string, from: string, to: string, flag: boolean) {
  //   if (amount != "" && this.fromCurrency != "" && this.toCurrency != "") {
  //     this.userService.currencyConvert(from, to, amount).subscribe((data: any) => {
  //       this.convertedValue = data['result'];
  //       this.flag = flag;
  //       console.log(flag);

  //     })
  //   }
  //   else {
  //     this.convertedValue = '';
  //   }

  //   // console.log(data['rate']);
  //   // this.convertedValue=Number(amount)*data['rate'];
  // }

}

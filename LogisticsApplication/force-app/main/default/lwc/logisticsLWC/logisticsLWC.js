import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_NAME from '@salesforce/schema/Customer__c.Customer_Name__c';
import MOBILE_NUMBER from '@salesforce/schema/Customer__c.Mobile_Number__c';
import ALTERNATIVE_MOBILE_NUMBER from '@salesforce/schema/Customer__c.Alternative_Mobile_Number__c';
import EMAIL from '@salesforce/schema/Customer__c.Email__c';
import CUSTOMER_ADDRESS from '@salesforce/schema/Customer__c.Customer_Address__c';
import STATE from '@salesforce/schema/Customer__c.State__c';
import CITY from '@salesforce/schema/Customer__c.City__c';
import PINCODE from '@salesforce/schema/Customer__c.PinCode__c';
import COUNTRY from '@salesforce/schema/Customer__c.Country__c';
import PICKUP_LOCATION from '@salesforce/schema/Customer__c.Pickup_Location__c';
import DELIVERY_LOCATION from '@salesforce/schema/Customer__c.Delivery_Location__c';
import PICKUP_DATE_AND_TIME from '@salesforce/schema/Customer__c.Pickup_Date_And_Time__c';
import PRODUCT from '@salesforce/schema/Customer__c.Product_Name__c';

export default class CustomerDetails extends LightningElement
{
    fields = [CUSTOMER_NAME,MOBILE_NUMBER,ALTERNATIVE_MOBILE_NUMBER,EMAIL,CUSTOMER_ADDRESS,STATE,CITY,PINCODE,COUNTRY,PICKUP_LOCATION,PICKUP_LOCATION_PINCODE ,DELIVERY_LOCATION,DELIVERY_LOCATION_PINCODE,PICKUP_DATE_AND_TIME,PRODUCT];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}

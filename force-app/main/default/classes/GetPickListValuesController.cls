global with sharing class GetPickListValuesController {

    @AuraEnabled
    public static List<String> getPicklistValues(String objectName, string fieldName) {
		List<String> values = new List<String>();
        Schema.DescribeSObjectResult[] descResults = 
            Schema.describeSObjects(new String[]{objectName});

        if (descResults.size() == 0) {
            System.debug('Error, could not retrieve the describe results for ' + objectName);
            return null;
        } else {
            Schema.DescribeSObjectResult result = descResults[0];
            Schema.SObjectField field = result.fields.getMap().get(fieldName);
            Schema.DescribeFieldResult fieldResult = field.getDescribe();
            List<Schema.PicklistEntry> ples = fieldResult.getPicklistValues();
            for (Schema.PicklistEntry ple : ples) {
                values.add(ple.getValue());
            }
        }
        return values;
    }
}
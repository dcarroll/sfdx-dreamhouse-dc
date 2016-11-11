public with sharing class PropertyController {

    @AuraEnabled
    public static PropertyPagedResult findAll(String searchKey, Decimal minPrice, Decimal maxPrice, Decimal pageNumber) {
        Integer pageSize = 8;
        String key = '%' + searchKey + '%';
        Integer offset = ((Integer)pageNumber - 1) * pageSize;
        
        PropertyPagedResult r =  new PropertyPagedResult();
        r.pageSize = pageSize;
        r.page = (Integer) pageNumber;
        r.total = [SELECT count() FROM property__c 
                      WHERE (title__c LIKE :key OR city__c LIKE :key)
                      AND price__c >= :minPrice
                      AND price__c <= :maxPrice];
        r.properties = [SELECT Id, title__c, city__c, description__c, price__c, baths__c, beds__c, thumbnail__c FROM property__c 
                      WHERE (title__c LIKE :key OR city__c LIKE :key)
                      AND price__c >= :minPrice
                      AND price__c <= :maxPrice
                      ORDER BY price__c LIMIT 8 OFFSET :offset];
        return r;
    }

    @AuraEnabled
    public static Property__c findById(Id propertyId) {
        return [SELECT id, name, beds__c, baths__c, address__c, city__c, state__c, price__c, Location__Latitude__s, Location__Longitude__s, Picture__c 
                FROM Property__c
                WHERE Id=:propertyId];
    }

}

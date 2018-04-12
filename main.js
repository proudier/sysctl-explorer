'use strict';

$(document).ready(function () {
    var client = algoliasearch('GOBDHY63K2', '5a2c0202b889e92cb65433bc586daef4');
    var index = client.initIndex('sysctl-explorer');
    $('#search-input').autocomplete({
        hint: false,
        autoselect: true,
        autoselectOnBlur: false
    }, [
        {
            source: $.fn.autocomplete.sources.hits(index, {hitsPerPage: 6}),
            displayKey: 'title',
            templates: {
                suggestion: function (suggestion) {
                    if(suggestion._highlightResult['title'].matchLevel == 'full')
                        return suggestion._highlightResult['title'].value;
                    if(suggestion._highlightResult['sysctl-variable'].matchLevel == 'full')
                        return suggestion._highlightResult['sysctl-variable'].value;
                    if(suggestion._highlightResult['sysctl-file'].matchLevel == 'full')
                        return suggestion._highlightResult['sysctl-file'].value;
                    return suggestion._highlightResult.title.value;
                },
                footer: '<hr/><small>Search by <a href="https://algolia.com" target="_blank" noopener>Algolia</a></small>',
                empty: 'No result'
            }
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset) {
        // console.log(suggestion, dataset);
        window.location.href = suggestion.url;
    });
});
!function(t){var e=t.django||(t.django={});e.pluralidx=function(t){var e=t>1;return"boolean"==typeof e?e?1:0:e},e.gettext=function(t){return t},e.ngettext=function(t,e,n){return 1==n?t:e},e.gettext_noop=function(t){return t},e.pgettext=function(t,e){return e},e.npgettext=function(t,e,n,r){return 1==r?e:n},e.interpolate=function(t,e,n){return n?t.replace(/%\(\w+\)s/g,function(t){return String(e[t.slice(2,-2)])}):t.replace(/%s/g,function(t){return String(e.shift())})},e.formats={DATETIME_FORMAT:"j \\d\\e F \\d\\e Y à\\s H:i",DATETIME_INPUT_FORMATS:["%d/%m/%Y %H:%M:%S","%d/%m/%Y %H:%M","%d/%m/%Y","%d/%m/%y %H:%M:%S","%d/%m/%y %H:%M","%d/%m/%y","%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d"],DATE_FORMAT:"j \\d\\e F \\d\\e Y",DATE_INPUT_FORMATS:["%d/%m/%Y","%d/%m/%y","%Y-%m-%d"],DECIMAL_SEPARATOR:",",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j \\d\\e F",NUMBER_GROUPING:"3",SHORT_DATETIME_FORMAT:"d/m/Y H:i",SHORT_DATE_FORMAT:"d/m/Y",THOUSAND_SEPARATOR:".",TIME_FORMAT:"H:i",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M"],YEAR_MONTH_FORMAT:"F \\d\\e Y"},e.get_format=function(t){var n=e.formats[t];return void 0===n?t:n},t.pluralidx=e.pluralidx,t.gettext=e.gettext,t.ngettext=e.ngettext,t.gettext_noop=e.gettext_noop,t.pgettext=e.pgettext,t.npgettext=e.npgettext,t.interpolate=e.interpolate,t.get_format=e.get_format}(this);
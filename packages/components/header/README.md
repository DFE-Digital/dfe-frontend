# Header

## Warning

If you intend to use this component, speak to Andy Jones (Head of Design) in the first instance as it is experimental.

## Guidance

Find out more about the header component and when to use it in the [DFE design manual](https://design.education.gov.uk/design-system/components/header).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the
compiled JavaScript for all components `dfefrontend.min.js` or the individual component JavaScript `header.js`.

## Quick start examples

### Header

[Preview the header component](https://design.education.gov.uk/design-system/components/header/preview)

#### HTML markup

```html
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "true",
    "showSearch": "false",
    "showHeaderActionLinks": "false",
    "logoPath": "public/images",
    "service": {
      "name": "name of the service"
    },
    "headerActionLinks": [
      {
        "url"  : "/",
        "label" : "Homepage"
      }
    ],
    "primaryLinks": [
      {
        "url"  : "/",
        "label" : "Homepage",
        "current": "true"
      }
    ]
  })
}}

```

### Nunjucks arguments

The header Nunjucks macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **showNav**                | boolean  | Yes       | Set to "true" to show the navigation links in the header. |
| **showSearch**             | boolean  | Yes       | Set to "true" to show the site search input form. |
| **showHeaderActionLinks**  | boolean  | Yes       | Set to "true" to show the headerActionLinks on the top right of the service |
| **homeHref**               | string   | No        | The href of the link for the logo and mobile home link in the navigation links. Defaults to "/". |
| **ariaLabel**              | string   | No        | Aria label for the logo href. Defaults to "DfE homepage". |
| **primaryLinks**           | array    | No        | Array of navigation links for use in the header. |
| **primaryLinks[].url**     | string   | No        | The href of a navigation item in the header. |
| **primaryLinks[].label**   | string   | No        | The label of a navigation item in the header. |
| **primaryLinks[].current** | boolean  | No        | Sets the selected class on the navigation menu link. |
| **service**                | object   | No        | Object containing the *name* and optional boolean *longName* of the service. Set this to "true" if the service name is longer than 22 characters. |
| **attributes**             | object   | No        | Any extra HTML attributes (for example data attributes) to add to the header container. |
| **searchAction**           | string   | No        | The search action endpoint. Defaults to "/search/" |
| **searchInputName**        | string   | No        | The name for the search field. Defaults to "q" |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

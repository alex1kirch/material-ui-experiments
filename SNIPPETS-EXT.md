#typescriptreact

```
    {
        // Place your snippets for typescriptreact here. Each snippet is defined under a snippet name and has a prefix, body and
        // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
        // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
        // same ids are connected.
        // Example:
        // "Print to console": {
        // 	"prefix": "log",
        // 	"body": [
        // 		"console.log("$1");",
        // 		"$2"
        // 	],
        // 	"description": "Log output to console"
        // }
        "reactConstProps": {
            "prefix": "reactConstProps",
            "body": [
                "const { $1 } = this.props;",
            ],
            "description": "reactConstProps"
        },
        "reactTest": {
            "prefix": "reactTest",
            "body": [
                "import { shallow } from \"enzyme\";",
                "import * as React from \"react\";",
                "import $1, { I$1Props } from \"./$1\";",
                "",
                "const setup = (propOverrides?: Partial<I$1Props>) => {",
                "    const props: I$1Props = {",
                "        onClick: jest.fn(),",
                "        ...propOverrides,",
                "    };",
                "",
                "    const wrapper = shallow(<$1 {...props} />);",
                "    return {",
                "        props,",
                "        wrapper,",
                "    };",
                "};",
                "",
                "describe(\"<$1 />\", () => {",
                "    it(\"renders without crashing\", () => {",
                "        // arrange",
                "        const { wrapper } = setup();",
                "        // act",
                "        // assert",
                "        expect(enzymeToJson(wrapper)).toMatchSnapshot();",
                "    });",
                "});",
            ],
            "description": "reactTest"
        }
    }
```

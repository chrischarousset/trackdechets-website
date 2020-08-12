import * as React from "react";
import { Typography } from "./Typography";
import { Link } from "./Link";
import { List, ListItem } from "./List";

const COMPONENTS = {
  h1: (props: { children: React.ReactNode }) => (
    <Typography as="h1" variant="h1" {...props} />
  ),
  h2: (props: { children: React.ReactNode }) => (
    <Typography as="h2" variant="h2" {...props} />
  ),
  h3: ({ children, ...props }: { children: React.ReactNode }) => (
    <Typography as="h3" variant="body1" {...props}>
      <strong>{children}</strong>
    </Typography>
  ),
  p: (props: { children: React.ReactNode }) => <Typography {...props} />,
  a: (props: { children: React.ReactNode }) => <Link {...props} />,
  ul: (props: { children: React.ReactNode }) => <List {...props} />,
  li: (props: { children: React.ReactNode }) => <ListItem {...props} />,
};

export interface HASTRoot {
  type: "root";
  children: Array<HASTElement | HASTText>;
}

interface HASTElement {
  type: "element";
  tagName: keyof JSX.IntrinsicElements;
  properties: Record<string, any>;
  children: Array<HASTElement | HASTText>;
}

interface HASTText {
  type: "text";
  value: string;
}

interface HASTNodeProps {
  node: HASTRoot | HASTElement | HASTText;
}

export function HASTNode({ node }: HASTNodeProps) {
  switch (node.type) {
    case "root":
      return (
        <>
          {node.children.map((childNode, index) => (
            <HASTNode key={index} node={childNode} />
          ))}
        </>
      );
    case "element": {
      const Component = COMPONENTS[node.tagName] ?? node.tagName;

      return (
        <Component {...node.properties}>
          {node.children.map((childNode, index) => (
            <HASTNode key={index} node={childNode} />
          ))}
        </Component>
      );
    }
    case "text":
    default:
      return <>{node.value}</>;
  }
}

import React from "react";
import RoutesContext from "./RoutesProvider";
import { statuses } from "./SidebarLayout";
import { Table, TR, TH, TD, Text, Link, Pill } from "../../../src";

const ComponentList = () => (
  <RoutesContext.Consumer>
    {routes => {
      const components = routes.filter(
        route => route.dirname === "/components" && !route.exact
      );

      const readyComponents = components
        .filter(route => route.props.status === "ready")
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      const inDevelopmentComponents = components
        .filter(route => route.props.status === "in-development")
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      const notStartedComponents = components
        .filter(
          route =>
            route.props.status !== "ready" &&
            route.props.status !== "in-development"
        )
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      const sortedComponents = [
        ...readyComponents,
        ...inDevelopmentComponents,
        ...notStartedComponents,
      ];

      return (
        <Table
          header={[
            <TH key="component" text="Component" />,
            <TH
              key="staus"
              text="Status"
              css={{
                width: "25%",
              }}
            />,
            <TH
              key="release"
              text="Release"
              css={{
                width: "25%",
              }}
            />,
          ]}
          rows={sortedComponents.map(component => (
            <TR key={component.name}>
              <TD>
                <Link href={component.href}>{component.props.title}</Link>
              </TD>
              <TD>
                {component.props.status !== "ready" && (
                  <Pill color={statuses[component.props.status].color}>
                    {statuses[component.props.status].title}
                  </Pill>
                )}
              </TD>
              <TD>
                <Text>
                  {component.props.releaseVersion &&
                    `Released ${component.props.releaseVersion}`}
                </Text>
              </TD>
            </TR>
          ))}
        />
      );
    }}
  </RoutesContext.Consumer>
);

export default ComponentList;

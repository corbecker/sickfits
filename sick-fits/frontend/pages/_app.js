import App, { Container } from "next/app";
import Page from "../components/Page";

/*
  App is provided by Next.js 
  It is a handy container for all your pages for persisting state across your application pages.
*/
class MyApp extends App {
  render() {
    const { Component } = this.props; //destructuring

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;

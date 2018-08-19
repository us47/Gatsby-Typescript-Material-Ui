import * as React from 'react'
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
    this.state = {
      open: false,
    };
  }

  public render(){
    return (
      <Layout>
        <div>
        <Typography variant="display1" color="primary">Hi People</Typography>
        <Typography variant="body2" color="secondary">Welcome to new{' '} {this.props.data.site.siteMetadata.title}</Typography>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
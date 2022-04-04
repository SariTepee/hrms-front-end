import React from 'react'
import { Grid, Image, Header, Segment, Divider, Input} from 'semantic-ui-react'

export default function Test() {

  React.state = {
    isVisible : true
  }
  return (
    <Grid>
      <Grid.Row stretched columns="2">
        <Grid.Column>
          <Image src="" />
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color='black' as='h5' textAlign="right">
              <span className="headline-1">Find</span>
            </Header>
            <br />
            <Header color='red' textAlign="right">
              <span className="headline-2">Job</span>
            </Header>
          </Segment>
          <Segment raised circular>
            <Input transparent type="text" icon="search" size="big" placeholder="Search . . ." />
          </Segment>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

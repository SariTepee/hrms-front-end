import React from 'react';
import {FormField, Grid, GridColumn, GridRow} from "semantic-ui-react";

function TextField() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={3}/>

                    <GridColumn width={10}>
                        <label>First Name</label>
                        <input placeholder='First Name'/>
                    </GridColumn>

                    <GridColumn width={3} />

                </GridRow>
            </Grid>

        </div>
    );
}

export default TextField;
import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'

export default function JobTitlesLayout() {
    return (
        <div>
            <Menu fluid vertical>
                <MenuItem>All Positions</MenuItem>
                <Menu.Item>Software Developer</Menu.Item>
                <Menu.Item>Software Architect</Menu.Item>
                <Menu.Item>Software Engineer</Menu.Item>
                <MenuItem>Front-end Developer</MenuItem>
            </Menu>
        </div>
    )
}

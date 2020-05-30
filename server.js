const express = require('express');

const server = express();

server.use(express.json());

const db = require('./knexconfig');

// get projects

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.json(projects)
        });
});

// get specific project

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    db('projects')
        .where({ id: id })
        .then(project => {
            res.json(project);
        });
});

// get project resources

server.get('/api/project-resources', (req, res) => {
    db('project_resources as pr')
        .join('projects as p', 'p.id', '=', 'pr.projectId')
        .join('resources as r', 'r.id', '=', 'pr.resourceid')
        .select('p.name as projectname', 'r.name as resourcename')
        .then(PR => {
            console.log(PR);
            res.json(PR);
        })
        .catch(err => {
            res.status(500).json({errorMessage: `there seems to have been an error with that request ${err}`})
        });
})

// get tasks should include project name and description

server.get('/api/tasks/', (req, res) => {
    db('tasks as t')
        .join('projects as p', 'p.id', '=', 't.projectid')
        .select('t.id', 't.description', 't.notes', 'p.name as projectname', 'p.description as projectdesc')
        .then(tasks => {
            res.json(tasks);
        });
});

// get resources

server.get('/api/resources', (req, res) => {
    db('resources')
        .then(resources => {
            res.json(resources);
        });
});

// add project
server.post('/api/projects', (req, res) => {
    if (req.body.name && req.body.description){
        db('projects')
            .insert({name: req.body.name, description: req.body.description})
            .then(results => {
                res.json(results);
            })
    } else {
        res.status(400).json({errorMessage: "Please be sure to include a name and description for the project"})
    }
});


// add resource to project
server.post('/api/project-resources', (req, res) => {
    if (req.body.projectid && req.body.resourceid){
        db('project_resources')
            .insert({projectId: req.body.projectid, resourceid: req.body.resourceid})
            .then(results => {
                res.json(results);
            })
    } else {
        res.status(400).json({errorMessage: "Please be sure to include a name and description for the project"})
    }
});

// add task
server.post('/api/tasks', (req, res) => {
    if (req.body.description && req.body.projectid){
        db('tasks')
            .insert({description: req.body.description, projectid: req.body.projectid, notes: req.body.notes})
            .then(results => {
                res.json(results);
            })
    } else {
        res.status(400).json({errorMessage: "Please be sure to include a name and description for the project"})
    }
});

server.listen(5000, () => {
    console.log("server running on http://localhost:5000");
})
const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = "202292b24f90ccd79d598f27c783cad0";
const token = "ATTAd46daef96786f96df05ec9ede66b1f1069b0b9ce6161c0fd79ed0d4964c815ca36C3CBCE";



//////////////////////////////////////////////////////////////
/////////////-----------BoardRoute ------------///////////////
//////////////////////////////////////////////////////////////


router.get('/boards', async (req, res) => {
    try {
        const response = await axios.get('https://api.trello.com/1/members/me/boards', {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching boards' });
    }
});



// DELETE route to delete board
router.delete('/boards/:boardId', async (req, res) => {
    try {
        const response = await axios.delete(`https://api.trello.com/1/boards/${req.params.boardId}`, {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting board' });
    }
});

// PUT route to update board
router.put('/boards/:boardId', async (req, res) => {
    try {
        const response = await axios.put(`https://api.trello.com/1/boards/${req.params.boardId}`, {
            key: apiKey,
            token: token,
            name: req.body.name,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating board' });
    }
});

// POST route to creat board
router.post('/boards', async (req, res) => {
    try {
        const response = await axios.post('https://api.trello.com/1/boards', {
            key: apiKey,
            token: token,
            name: req.body.name,
            defaultLabels: false,
            defaultLists: false,
            prefs_permissionLevel: 'private',
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating board' });
    }
});

//////////////////////////////////////////////////////////////
/////////////-----------Cards Routes ------------/////////////
//////////////////////////////////////////////////////////////

// PUT route to update card
router.put('/cards/:cardId', async (req, res) => {
    try {
        const response = await axios.put(`https://api.trello.com/1/cards/${req.params.cardId}`, {
            key: apiKey,
            token: token,
            name: req.body.name,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating card' });
    }
});

// DELETE route to delete card

router.delete('/cards/:cardId', async (req, res) => {
    try {
        const response = await axios.delete(`https://api.trello.com/1/cards/${req.params.cardId}`, {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting card' });
    }
});
// GET route to get all cards of a list
router.get('/lists/:listId/cards', async (req, res) => {
    try {
        const response = await axios.get(`https://api.trello.com/1/lists/${req.params.listId}/cards`, {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching cards' });
    }
});

//////////////////////////////////////////////////////////////
/////////////-----------List Routes ------------//////////////
//////////////////////////////////////////////////////////////

router.get('/boards/:boardId/lists', async (req, res) => {
    console.log('boardId', req.params.boardId)
    try {
        const response = await axios.get(`https://api.trello.com/1/boards/${req.params.boardId}/lists`, {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching lists' });
    }
});


// POST route to create list
router.post('/boards/:boardId/lists', async (req, res) => {
    try {
        const response = await axios.post(`https://api.trello.com/1/boards/${req.params.boardId}/lists`, {
            key: apiKey,
            token: token,
            name: req.body.name,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating list' });
    }
});

// DELETE route to delete list
router.delete('/lists/:listId', async (req, res) => {
    try {
        const response = await axios.delete(`https://api.trello.com/1/lists/${req.params.listId}`, {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting list' });
    }
});


// PUT route to update list
router.put('/lists/:listId', async (req, res) => {
    try {
        const response = await axios.put(`https://api.trello.com/1/lists/${req.params.listId}`, {
            key: apiKey,
            token: token,
            name: req.body.name,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating list' });
    }
});

//////////////////////////////////////////////////////////////
/////////////-----------colaborator Roues------------/////////
//////////////////////////////////////////////////////////////

// GET route to get all user collaborators
router.get('/user/collaborators', async (req, res) => {
    try {
        const response = await axios.get('https://api.trello.com/1/members/me/collaborations', {
            params: {
                key: apiKey,
                token: token,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user collaborators' });
    }
});
module.exports = router;
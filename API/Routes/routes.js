const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = "202292b24f90ccd79d598f27c783cad0";
const token = "ATTAd46daef96786f96df05ec9ede66b1f1069b0b9ce6161c0fd79ed0d4964c815ca36C3CBCE";

const api = axios.create({
    baseURL: "https://api.trello.com/1",
    params: {
        key: apiKey,
        token: token,
    }
});

const errorHandler = (error) => {
    const statusCode = error.response?.status

    if (error.code === "ERR_CANCELED") {
        notification.error({
            placement: "bottomRight",
            description: "API canceled!",
        })
        return Promise.resolve()
    }

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})

router.get('/boards', async (req, res) => {
    try {
        const response = await api.request({
            method: "GET",
            url: "/members/me/boards"
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching boards' });
    }
});

router.delete('/boards/:boardId', async (req, res) => {
    try {
        const response = await api.request({
            method: "DELETE",
            url: `/boards/${req.params.boardId}`
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting board' });
    }
});

router.put('/boards/:boardId', async (req, res) => {
    try {
        const response = await api.request({
            method: "PUT",
            url: `/boards/${req.params.boardId}`,
            data: {
                name: req.body.name,
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating board' });
    }
});

router.post('/boards', async (req, res) => {
    try {
        const response = await api.request({
            method: "POST",
            url: "/boards",
            data: {
                name: req.body.name,
            }
        })

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating board' });
    }
});

router.put('/cards/:cardId', async (req, res) => {
    try {
        const response = await api.request({
            method: "PUT",
            url: `/cards/${req.params.cardId}`,
            data: {
                name: req.body.name,
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating card' });
    }
});

router.delete('/cards/:cardId', async (req, res) => {
    try {
        const response = await api.request({
            method: "DELETE",
            url: `/cards/${req.params.cardId}`
        
        })

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting card' });
    }
});

router.get('/lists/:listId/cards', async (req, res) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `/lists/${req.params.listId}/cards`
        
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching cards' });
    }
});

router.get('/boards/:boardId/lists', async (req, res) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `/boards/${req.params.boardId}/lists`
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching lists' });
    }
});

router.post('/boards/:boardId/lists', async (req, res) => {
    try {
        const response = await api.request({
            method: "POST",
            url: `/boards/${req.params.boardId}/lists`,
            data: {
                name: req.body.name,
            }
        })

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating list' });
    }
});

router.put('/lists/:listId/closed', async (req, res) => {
    try {
        const response = await api.request({
            method: "PUT",
            url: `/lists/${req.params.listId}/closed`,
            data: {
                value: req.body.value,
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while closing list' });
    }
});

router.put('/lists/:listId', async (req, res) => {
    try {
        const response = await api.request({
            method: "PUT",
            url: `/lists/${req.params.listId}`,
            data: {
                name: req.body.name,
            }
        
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating list' });
    }
});

router.get('/user/collaborators', async (req, res) => {
    try {
        const response = await api.request({
            method: "GET",
            url: "/members/me/boards"
        
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user collaborators' });
    }
});
router.get('/members/:memberId', async (req, res) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `/members/${req.params.memberId}`
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching members' });
    }
});
module.exports = router;
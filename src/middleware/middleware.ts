import { app } from "../routes/routeManager";
import express from "express"
import bodyParser from "body-parser"

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
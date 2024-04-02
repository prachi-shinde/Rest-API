import express from "express"
//const express = require("express");
import {getAllProducts, getAllProductsTesting} from "../controllers/products.mjs";

export const router = express.Router();
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
import { Router } from "express";
import { getAllNotesService } from "../services/getNotesService";
import { getOneNoteService } from "../services/getOneNoteService";
import { addNoteService } from "../services/addNoteService";
import { removeNoteService } from "../services/removeNoteService";
import { updateNoteService } from "../services/updateNoteService";
import { archiveNoteService } from "../services/archiveNoteService";
import { getStatsService } from "../services/getStatsService";

const router = Router();

router.get('/notes', getAllNotesService);
router.get('/notes/stats', getStatsService);
router.get('/notes/:id', getOneNoteService);
router.post('/notes', addNoteService);
router.delete('/notes/:id', removeNoteService);
router.patch('/notes/:id', updateNoteService);
router.patch('/notes/archive/:id', archiveNoteService);

export default router;
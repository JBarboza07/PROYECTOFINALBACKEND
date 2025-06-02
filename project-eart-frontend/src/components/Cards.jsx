import {
  Card, CardHeader, CardMedia, CardContent, CardActions,
  Avatar, IconButton, Typography, Button, TextField, Box, Menu, MenuItem
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState, useRef } from 'react';

function Cards() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [published, setPublished] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const fileInputRef = useRef(null);

  // Menu para los tres puntos
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handlePublish = () => {
    if (image && text.trim()) {
      setPublished(true);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleDelete = () => {
    setDeleted(true);
    handleMenuClose();
  };

  const handleEdit = () => {
    setEditing(true);
    handleMenuClose();
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  if (deleted) return null;

  return (
    <Card
      sx={{
        width: 500,
        margin: 'auto',
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleEdit}>Editar publicación</MenuItem>
              <MenuItem onClick={handleDelete}>Eliminar publicación</MenuItem>
            </Menu>
          </>
        }
        title="usuario_earth"
        subheader="Hace un momento"
      />

      {!published ? (
        <>
          {!image && (
            <Box sx={{ padding: 2 }}>
              <Button fullWidth variant="outlined" component="label">
                Subir Imagen
                <input type="file" hidden accept="image/*" onChange={handleImageUpload} ref={fileInputRef} />
              </Button>
            </Box>
          )}

          {image && (
            <CardMedia
              component="img"
              image={image}
              alt="Contenido"
              sx={{
                width: '100%',
                height: 500,
                objectFit: 'cover'
              }}
            />
          )}

          <CardContent>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Escribe un pie de foto..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
            />
          </CardContent>

          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={handlePublish}
              disabled={!image || text.trim() === ''}
            >
              Publicar
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          {image && (
            <CardMedia
              component="img"
              image={image}
              alt="Contenido"
              sx={{
                width: '100%',
                height: 500,
                objectFit: 'cover'
              }}
            />
          )}

          <CardActions disableSpacing sx={{ px: 1 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={handleLike}>
                <FavoriteIcon sx={{ color: liked ? red[500] : 'grey.600' }} />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>

            {/* Botón guardar publicación */}
            <Box sx={{ marginLeft: 'auto' }}>
              <IconButton onClick={() => setSaved(!saved)}>
                {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
            </Box>
          </CardActions>

          <CardContent sx={{ pt: 0 }}>
            <Typography variant="body2" fontWeight={600}>
              {likesCount} me gusta
            </Typography>

            {editing ? (
              <Box>
                <TextField
                  fullWidth
                  multiline
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <Button onClick={() => setEditing(false)}>Guardar</Button>
              </Box>
            ) : (
              <Typography variant="body2">
                <strong>usuario_earth</strong> {text}
              </Typography>
            )}
          </CardContent>

          {/* Comentarios */}
          <CardContent>
            <Box>
              {comments.map((comment, idx) => (
                <Typography key={idx} variant="body2">
                  <strong>comentario_anon:</strong> {comment}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', mt: 2 }}>
              <TextField
                variant="standard"
                placeholder="Añade un comentario..."
                fullWidth
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <Button onClick={handleCommentSubmit} disabled={!commentInput.trim()}>
                Publicar
              </Button>
            </Box>
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default Cards;

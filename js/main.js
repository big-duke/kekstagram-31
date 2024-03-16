import { photoData } from './data';
import { renderThumbnails } from './thumbnail.js';
import {renderGallery} from './gallery.js';
import { setupUploadForm } from './upload';

setupUploadForm();
renderThumbnails(photoData);
renderGallery(photoData);
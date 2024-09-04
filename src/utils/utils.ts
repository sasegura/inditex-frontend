import { IPodcastDetail, IPodcastsResponse } from "../interfaces/podcast";

export function DateTransform(date: string) {
  return new Date(date).toLocaleDateString('es-ES');
}

export function milliSecondsToTime(duration: number) {
  const date = new Date(duration);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const realDuration = `${hours}:${minutes}:${seconds}`;

  return realDuration;
}

export function transformPodcast(podcast:IPodcastsResponse):IPodcastDetail[]{
   const result=podcast.feed.entry.map(entry => {
    const {
      id: { attributes: { 'im:id': id } },
      'im:name': { label: name },
      'im:image': images,
      title: { label: title },
      'im:artist': { label: author },
      summary: { label: description },
    } = entry;

    const imageUrl = images[images.length - 1].label;

    return {
      id,
      name,
      imageUrl,
      title,
      author,
      description,
    };
  })
  return result;
}
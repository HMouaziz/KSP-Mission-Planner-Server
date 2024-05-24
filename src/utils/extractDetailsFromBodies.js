function extractDetailsFromBodies(bodies) {
  return bodies.map(body => {
    const { id, name, bodyType, orbiting, color } = body;
    return { id, name, bodyType, orbiting, color };
  });
}

module.exports = extractDetailsFromBodies


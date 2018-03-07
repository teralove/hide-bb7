module.exports = function HideBB7(dispatch) {
    
    const TemplateId = 30302007;
    const HuntingZoneId = 1023;
    
    dispatch.hook('S_SPAWN_NPC', 5, (event) => {
        if (event.templateId == TemplateId && event.huntingZoneId == HuntingZoneId) {
            return false;
        }
    })
    
}
